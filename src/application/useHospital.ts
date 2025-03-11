import {
  useSuspenseQuery,
  UseSuspenseQueryOptions
} from '@tanstack/react-query';
import hospitalService from '@/domain/hospital.service';
import { Hospital } from '@/domain/hospital';

export const fetchHospitalOption: UseSuspenseQueryOptions<Hospital> = {
  queryKey: ['hospital'],
  queryFn: hospitalService.getHospital
};

export function useHospital() {
  return useSuspenseQuery(fetchHospitalOption);
}
