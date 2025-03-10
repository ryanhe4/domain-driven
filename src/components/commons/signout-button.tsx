'use client';

import { LogOut } from 'lucide-react';

export function SignOutButton() {
  return (
    <form
      action="/auth/signout"
      method="post"
      className={'flex items-center gap-2'}
    >
      <button type="submit">
        <LogOut />
      </button>
      Logout
    </form>
  );
}
