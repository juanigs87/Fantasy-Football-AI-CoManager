export interface ESPNCookies {
  espn_s2: string;
  swid: string;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  team: string;
  points: number;
  projectedPoints?: number;
  seasonProjectedPoints?: number;
  injuryStatus?: string;
  percentStarted?: number;
  percentOwned?: number;
  availability?: 'FREEAGENT' | 'WAIVERS';
}

export interface TeamRoster {
  teamId: number;
  teamName: string;
  starters: Player[];
  bench: Player[];
  injuredReserve?: Player[];
}

export interface LeagueTeamRoster {
  teamId: number;
  teamName: string;
  abbrev?: string;
  owner?: string;
  record?: { wins: number; losses: number; ties: number };
  players: (Player & { lineupSlot: string })[];
}

export type NFLGameState = 'pre' | 'in' | 'post' | 'bye' | 'unknown';

export interface LivePlayerScore {
  id: string;
  fullName: string;
  position: string;
  team: string;
  lineupSlot: string;
  points: number;
  projectedPoints: number;
  injuryStatus?: string;
  gameState: NFLGameState;
  gameDetail?: string;
}

export interface LiveTeamScore {
  teamId: number;
  teamName: string;
  livePoints: number;
  projectedPoints: number;
  winProbability?: number;
  playersYetToPlay: number;
  playersInProgress: number;
  starters: LivePlayerScore[];
  bench: LivePlayerScore[];
}

export interface LiveMatchup {
  matchupPeriodId: number;
  scoringPeriodId: number;
  home: LiveTeamScore;
  away?: LiveTeamScore;
}

export interface LeagueInfo {
  id: string;
  name: string;
  seasonId: number;
  currentWeek: number;
  teams: any[];
  settings?: any;
}

export interface Matchup {
  week: number;
  homeTeam: {
    id: number;
    name: string;
    projectedScore: number;
    actualScore?: number;
  };
  awayTeam: {
    id: number;
    name: string;
    projectedScore: number;
    actualScore?: number;
  };
}

export interface WaiverTarget {
  player: Player;
  reason: string;
  priority: number;
  suggestedFAAB?: number;
  dropCandidate?: Player;
}

export interface TradeAnalysis {
  tradeScore: number;
  recommendation: 'accept' | 'reject' | 'counter';
  reasoning: string;
  fairnessRating: number;
  impact: {
    immediate: string;
    restOfSeason: string;
  };
}