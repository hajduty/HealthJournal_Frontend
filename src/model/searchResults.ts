import { Patient } from "./patient";

export interface SearchResults {
    patients: Patient[];
    totalCount: number;
}