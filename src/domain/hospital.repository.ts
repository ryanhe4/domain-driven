import { Hospital } from '@/domain/hospital';
import client from '@/infra/supabase';

class HospitalRepository {
  async updateHospital(hospital: Hospital) {
    const supabase = client.getClient();
    const { data, error } = await supabase
      .from('hospitals')
      .update({ hspt_name: hospital.hspt_name })
      .eq('id', hospital.id);

    if (error) throw error;

    return data;
  }
}

const hospitalRepository = new HospitalRepository();

export default hospitalRepository;
