import client from "@/infra/supabase";
import Color from "@/domain/color";

class ColorService {
    async getAllColors(): Promise<Color[]> {
        const data = await client.getAllColors()
        if (!data) return [];
        return data as Color[];
    }
}

const colorService = new ColorService();

export default colorService;