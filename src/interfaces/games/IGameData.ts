import { ILeague } from "interfaces/league/ILeague";
import { IGame } from "./IGame";
import { IScores } from "interfaces/scores/IScores";
import { ITeams } from "interfaces/teams/ITeams";

export interface IGameData {
  game: IGame;
  league: ILeague;
  teams: ITeams;
  scores: IScores;
}