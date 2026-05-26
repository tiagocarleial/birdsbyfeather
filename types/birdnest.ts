export interface Camera {
  id: string;
  name: string;
  youtubeId: string;
}

export interface BirdNest {
  id: string;
  name: string;
  species: string;
  location: string;
  youtubeId: string; // Primary camera for backwards compatibility
  cameras?: Camera[]; // Multiple cameras support
  status: 'active' | 'inactive' | 'seasonal';
  thumbnail?: string;
  description: string;
  family?: {
    parents: {
      name: string;
      description: string;
    }[];
    offspring: {
      name: string;
      hatchDate?: string;
      description: string;
    }[];
  };
}
