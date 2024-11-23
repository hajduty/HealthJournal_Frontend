import { PatientSearch } from "./patientSearch";

export interface SearchResults {
    patients: PatientSearch[];
    totalCount: number;
}