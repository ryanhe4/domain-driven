export interface Hospital {
  id: string;
  hspt_name: string;
  avatar_url: string;
}

export interface HospitalUpdate {
  id: string;
  hspt_name: string;
  hspt_image?: File;
}
