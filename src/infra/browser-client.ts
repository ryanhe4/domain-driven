import {createBrowserClient} from "@supabase/ssr";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

const browserClient = createBrowserClient(url, anon)

export default browserClient