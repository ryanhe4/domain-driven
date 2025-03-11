import { Hospital, HospitalUpdate } from '@/domain/hospital';
import client from '@/infra/supabase';

class HospitalRepository {
  async updateHospital(hospital: HospitalUpdate) {
    const supabase = client.getClient();

    const hospitalData: Hospital = {
      id: hospital.id,
      hspt_name: hospital.hspt_name,
      avatar_url: ''
    };

    if (hospital.hspt_image) {
      const { data: storageData, error } = await supabase.storage
        .from('hspt_public')
        .upload(`profile/${hospital.id}`, hospital.hspt_image, {
          cacheControl: '0',
          upsert: true
        });

      if (error) {
        throw error;
      }

      console.log(storageData);

      hospitalData.avatar_url = storageData.fullPath;
    } else {
      if (
        await supabase.storage
          .from('hspt_public')
          .exists(`public/${hospital.id}`)
      ) {
        await supabase.storage
          .from('hspt_public')
          .remove([`profile/${hospital.id}`]);
      }
    }

    const { data, error } = await supabase
      .from('hospitals')
      .update(hospitalData)
      .eq('id', hospital.id);

    if (error) throw error;

    return data;
  }
}

const hospitalRepository = new HospitalRepository();

export default hospitalRepository;
