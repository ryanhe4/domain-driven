import {createServer} from "@/utils/server-client";
import {redirect} from "next/navigation";
import {SignOutButton} from "@/components/signout-button";

export async function PrefetchUserContainer() {
    const supabase = await createServer()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return <div>
        {data.user.id}
        <SignOutButton/>
    </div>
}