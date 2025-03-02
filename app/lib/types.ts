import { Status } from "./constants";

export type Badge = {
  status: Status;
};

export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: Status;
  time: string;
  title: string;
};

export interface ApiResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}