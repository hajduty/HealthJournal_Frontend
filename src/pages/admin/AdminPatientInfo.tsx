import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PatientDetails } from '../../shared/admin/PatientDetails';
import { getPatient } from '../../services/patientService';
import { Patient } from '../../model/patient';
import { EncountersTable } from '../../shared/admin/EncountersTable';
import { Encounter } from '../../model/encounter';
import { ObservationsTable } from '../../shared/admin/ObservationsTable';

export const AdminPatientInfo = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState<Patient>();
    const [encounter, setEncounter] = useState<Encounter>();

    useEffect(() => {
        fetchPatient();
    }, [id]);

    const fetchPatient = async () => {
        if (id != null) {
            const response = await getPatient(parseInt(id));
            setPatient(response);
        }
    }

    if (patient == null) {
        return (
            <>
                Loading...
            </>
        )
    }

    return (
        <>
            <div className="grid lg:grid-cols-5 grid-flow-row auto-rows-max xl:mx-40 lg:mx-10 md:mx-8 lg:my-16 m-2 gap-2 text-slate-900">
                <PatientDetails patient={patient} className='' />
                <div className='lg:col-span-2 col-span-1'>
                    <EncountersTable onSelectEncounter={(e) => setEncounter(e)} patientId={patient.id} />
                </div>
                <div className='lg:col-span-2 col-span-1'>
                    <ObservationsTable observations={encounter?.observations!} />
                </div>
            </div>
        </>
    );
}
