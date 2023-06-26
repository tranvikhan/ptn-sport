import { Team } from "./Team";

export interface Match {
  id: string;
  type: string;
  startAt: string;
  endAt: string | null;
  teamA: MatchTeam;
  teamB: MatchTeam;
}

export interface MatchTeam {
  id: string | null;
  placeholder?: string | null;
  scores: number | null;
  yellowCard: number | null;
  redCard: number | null;
  pen?: number | null;
  detail?: Team;
}
