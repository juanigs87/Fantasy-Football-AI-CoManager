// League-wide lookups: the free-agent pool and every team's roster.
import { espnApi } from '../services/espnApi.js';

export async function getFreeAgents(args: { leagueId: string; position?: string; limit?: number }) {
  const { leagueId, position, limit } = args;
  if (!leagueId) throw new Error('League ID is required');

  const players = await espnApi.getAvailablePlayers(leagueId, { position, limit: limit ?? 50 });
  return {
    leagueId,
    position: position || 'ALL',
    count: players.length,
    players
  };
}

export async function getLeagueRosters(args: { leagueId: string; teamId?: string }) {
  const { leagueId, teamId } = args;
  if (!leagueId) throw new Error('League ID is required');

  const teams = await espnApi.getAllRosters(leagueId);
  if (teamId) {
    const team = teams.find(t => t.teamId === parseInt(teamId));
    if (!team) {
      throw new Error(`Team ${teamId} not found in league ${leagueId}. Available teams: ${teams.map(t => `${t.teamId} (${t.teamName})`).join(', ')}`);
    }
    return { leagueId, teams: [team] };
  }
  return { leagueId, teams };
}
