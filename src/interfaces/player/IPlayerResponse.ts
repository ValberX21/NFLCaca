import { IPlayer } from "./IPlayer";

export interface IPlayerResponse {
  get: string;
  parameters: {
    team: string;
    season: string;
  };
  errors: any[];
  results: number;
  response: IPlayer[];
}