export interface Camera {
  id: string;
  name: string;
  youtubeId?: string; // Video ID (changes when live restarts)
  channelId?: string; // Channel ID (permanent) - for auto-updating
  liveUrl?: string; // Permanent /live URL if available
}

export interface BirdNest {
  id: string;
  name: string;
  species: string;
  location: string;
  youtubeId?: string; // Primary camera video ID (backwards compatibility)
  channelId?: string; // YouTube channel ID for auto-updating live streams
  liveUrl?: string; // Permanent /live URL (e.g., youtube.com/@channel/live)
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
