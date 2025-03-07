import {createServerClient} from "@supabase/ssr";
import {cookies} from "next/headers";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

const client = createServerClient(url, anon, {
    cookies: {
        async getAll() {
            return (await cookies()).getAll()
        },
        async setAll(cookiesToSet) {
            const cookieStore = await cookies()
            try {
                cookiesToSet.forEach(({name, value, options}) => {
                    cookieStore.set(name, value, options)
                })
            } catch {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
            }
        }
    }
})

export default client;