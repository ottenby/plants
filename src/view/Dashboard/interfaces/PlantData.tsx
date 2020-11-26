import { IEntry } from "./Entry";

export interface IPlantData {
    name: string
    species: string
    height: number
    id: number
    months: number
    entrys: IEntry[]
    userId: string 
}