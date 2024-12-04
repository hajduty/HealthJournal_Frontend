import { Patient } from "./patient";

export interface PatientPaginated {
    patients: Patient[];
    totalCount: number;
}