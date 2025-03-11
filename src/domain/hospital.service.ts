import client from '@/infra/supabase';
import { Hospital, HospitalUpdate } from '@/domain/hospital';
import hospitalRepository from '@/domain/hospital.repository';

class HospitalService {
  async getHospital(): Promise<Hospital> {
    return await client.getHospital();
  }

  async updateHospital(hospital: HospitalUpdate) {
    return await hospitalRepository.updateHospital(hospital);
  }

  createDoctor() {}
}

const hospitalService = new HospitalService();

export default hospitalService;
