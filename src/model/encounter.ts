import { Observation } from "./observation";

export interface Encounter {
    id?: number,
    date: Date,
    patientId: number,
    observations: Observation[]
}