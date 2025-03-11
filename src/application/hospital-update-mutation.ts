import {
  useMutation,
  UseMutationOptions,
  useQueryClient
} from '@tanstack/react-query';
import hospitalService from '@/domain/hospital.service';
import { HospitalUpdate } from '@/domain/hospital';
import { PostgrestError } from '@supabase/supabase-js';

export function useHospitalUpdateMutation({
  onSuccess
}: Omit<
  UseMutationOptions<null, PostgrestError, HospitalUpdate>,
  'mutationFn'
>) {
  const queryClient = useQueryClient();

  return useMutation<null, PostgrestError, HospitalUpdate>({
    mutationFn: hospitalService.updateHospital,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ['hospital']
      });
      onSuccess?.(data, variables, context);
    }
  });
}
