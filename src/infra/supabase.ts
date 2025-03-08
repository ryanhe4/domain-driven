import {createClient} from "@/utils/browser-client";

class MangoSupabaseClient {
    getClient() {
        return createClient();
    }

    async getAllColors() {
        const client = this.getClient();
        const {data} = await client.from("colors").select();
        return data;
    }

    async getUser() {
        const client = this.getClient();
        const {data} = await client.auth.getUser();
        return data;
    }
}

const client = new MangoSupabaseClient();

export default client;