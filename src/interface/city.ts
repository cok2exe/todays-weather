import { ICoord } from './common'

export interface ICity {
  id: number
  name: string;
  country: string;
  coord: ICoord
}