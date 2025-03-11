import { createClient } from '@/utils/browser-client';
import { proxy } from 'valtio/vanilla';
import { SupabaseClient } from '@supabase/supabase-js';
import { isServer } from '@tanstack/react-query';

class MangoSupabaseClient {
  async getAllColors() {
    const client = this.getClient();
    const { data } = await client.from('colors').select();
    return data;
  }

  async getHospital() {
    const client = this.getClient();

    if (!client) {
      throw new Error('Client does not exist');
    }

    const user = await client.auth.getUser();
    const { data } = await client
      .from('hospitals')
      .select()
      .eq('id', user.data.user?.id)
      .single();
    return data;
  }

  getClient() {
    const client = isServer ? serverClient?.client : createClient();

    if (!client) {
      throw new Error('Client does not exist');
    }

    return client;
  }
}

const client = new MangoSupabaseClient();

export const serverClient = proxy<{
  client: SupabaseClient | null;
}>({
  client: null
});

export default client;
