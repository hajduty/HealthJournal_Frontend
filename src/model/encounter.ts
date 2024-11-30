import { Observation } from "./observation";

export interface Encounter {
    date: Date,
    patientId: number,
    observations: Observation[]
}