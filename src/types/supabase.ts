export type Game = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  start_time: string;
  prize_pool: number;
  min_players: number;
  max_players: number;
  current_players: number;
  price: number;
  status: 'upcoming' | 'live' | 'finished';
  created_at: string;
};

export type Player = {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  created_at: string;
};

export type Card = {
  id: string;
  game_id: string;
  player_id: string;
  numbers: number[];
  created_at: string;
};

export type Winner = {
  id: string;
  game_id: string;
  player_id: string;
  prize_amount: number;
  created_at: string;
}; 