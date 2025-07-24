import { IGameStatus } from "./IGameStatus";
import { IVenue } from "./IVenue";
import { IGameDate } from "./IGameDate";

export interface IGame {
  id: number;
  stage: string;
  week: string;
  date: IGameDate;
  venue: IVenue;
  status: IGameStatus;
}