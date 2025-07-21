import { ILeague } from "../league/ILeague";
import { IScores } from "../scores/IScores";
import { ITeams } from "../teams/ITeams";
import { IGame } from "./IGame";

export interface IGameData {
  game: IGame;
  league: ILeague;
  teams: ITeams;
  scores: IScores;
}