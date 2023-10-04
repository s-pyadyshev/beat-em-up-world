import { IGameCard } from "./GameCard";

export interface IGameList {
  loading: any;
  error: any;
  gamesList: IGameCard[];
  filteredGames: any[];
  filteredOptions: {};
}
