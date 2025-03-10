import { proxy } from 'valtio/vanilla';
import { User } from '@supabase/auth-js';

interface UserRepository {
  user: User | undefined;
}

export const userRepository = proxy<UserRepository>({
  user: undefined
});
