import {SupabaseClient} from "@supabase/supabase-js";
import browserClient from "@/infra/browser-client";
import {delay} from "@/utils/delay";

class MangoSupabaseClient {
    client: SupabaseClient

    constructor() {
        if (typeof window !== 'undefined') {
            this.client = browserClient;
        } else {
            this.client = browserClient;
        }
    }

    async getAllColors() {
        await delay(5000);
        const {data} = await this.client.from("colors").select();
        return data;
    }
}



const client = new MangoSupabaseClient();

export default client;