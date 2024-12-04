import { Encounter } from "./encounter";

export interface EncounterPaginated {
    encounters: Encounter[];
    totalCount: number;
}