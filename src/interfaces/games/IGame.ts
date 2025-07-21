import { IGameStatus } from "./IGameStatus";
import { IVenue } from "./IVenue";
import { IGameData } from "./IGameDate";

export interface IGame {
  id: number;
  stage: string;
  week: string;
  date: IGameData;
  venue: IVenue;
  status: IGameStatus;
}