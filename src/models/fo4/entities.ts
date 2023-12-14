export interface Fo4GroupScores {
  groupName: string;
  teams: Fo4TeamScore[];
}

export interface Fo4TeamScore {
  id: string;
  teamDetail?: Fo4Team;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}

export interface Fo4Match {
  id: string;
  type: string;
  startAt: string;
  endAt: string | null;
  teamA: Fo4MatchTeam;
  teamB: Fo4MatchTeam;
}

export interface Fo4MatchTeam {
  id: string | null;
  placeholder?: string | null;
  scores: number | null;
  yellowCard: number | null;
  redCard: number | null;
  pen?: number | null;
  detail?: Fo4Team;
}

export interface Fo4Team {
  id: string;
  name: string;
  teamName: string;
  teamLogo: string;
  image: string;
}
