export interface FootballMockData {
  teams: {
    [key in string]: FootballTeam;
  };
  matchRounds: FootballMatchRound[];
  rankings: Ranking[];
}
export interface Ranking {
  teamId: string;
  title: string;
  color: string;
}

export interface FootballTeam {
  id: string;
  index: number;
  name: string;
  color: string;
  logo: string;
  members: string[];
}

export interface FootballMatchRound {
  name: string;
  matches: FootballMatch[];
}

export interface FootballMatch {
  teamA: string;
  teamB: string;
  result?: number[];
}
