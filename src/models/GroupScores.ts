import { Team } from "./Team";

export interface GroupScores {
  groupName: string;
  teams: TeamScore[];
}

export interface TeamScore {
  id: string;
  teamDetail?: Team;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}
