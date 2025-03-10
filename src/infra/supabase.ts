import { createClient } from '@/utils/browser-client';

class MangoSupabaseClient {
  async getAllColors() {
    const client = this.#getClient();
    const { data } = await client.from('colors').select();
    return data;
  }

  #getClient() {
    return createClient();
  }
}

const client = new MangoSupabaseClient();

export default client;
