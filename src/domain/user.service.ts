import client from "@/infra/supabase";

class UserService {
    async getCurrentUser() {
        return await client.getUser();
    }
}

const userService = new UserService();

export default userService;