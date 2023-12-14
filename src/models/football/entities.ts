export interface FootballMockData {
  teams: {
    [key in string]: FootballTeam;
  };
  matchRounds: FootballMatchRound[];
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
