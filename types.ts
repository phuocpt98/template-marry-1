
export interface CoupleMember {
  name: string;
  role: 'Chú Rể' | 'Cô Dâu';
  description: string;
  image: string;
}

export interface StoryEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface WeddingDate {
  target: Date;
}
