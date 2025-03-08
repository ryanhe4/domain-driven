'use client'

export function SignOutButton() {
    return <div className= "p-4 border border-amber-500 inline-block rounded hover:bg-amber-600 hover:cursor-pointer">
        <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
                Sign out
            </button>
        </form>
    </div>
}