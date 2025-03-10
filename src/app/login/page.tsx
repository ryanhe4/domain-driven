import { login, signup } from '@/application/auth-action';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-2 p-10 border items-start max-w-1/2 mx-auto mt-10 bg-background ">
      <h2 className={'text-3xl font-semibold'}>Login / SignUp</h2>
      <Label htmlFor="email">Email:</Label>
      <Input id="email" name="email" type="email" required />
      <Label htmlFor="password">Password:</Label>
      <Input id="password" name="password" type="password" required />
      <div className={'flex gap-2 w-full justify-end'}>
        <Button formAction={login}>Log in</Button>
        <Button variant={'secondary'} formAction={signup}>
          Sign up
        </Button>
      </div>
    </form>
  );
}
