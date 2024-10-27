export interface Choir {
    id: string;
    logo_url: string;
    name: string;
    description: string;
    location: {
      city: string;
      state: string;
      zip_code: string;
    };
    contact_email: string;
    number_of_members: number;
    supported_voices: Array<'soprano' | 'alto' | 'tenor' | 'bass'>;
    website: string;
    social_media: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      youtube?: string;
    };
  }
  
  export type Choruses = Choir[];
  