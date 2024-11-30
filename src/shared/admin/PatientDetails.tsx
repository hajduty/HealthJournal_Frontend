import { Patient } from "../../model/patient"

export const PatientDetails = ({ patient }: { patient: Patient }) => {
    return (
        <>
            <h1 className="text-lg font-semibold">Patient info</h1>
            <div className="bg-slate-300 rounded-sm flex flex-col gap-2 p-4">
                <span className="flex flex-row gap-2">
                    <p className="font-semibold">First name:</p>
                    <p>{patient.firstName}</p>
                </span>
                <span className="flex flex-row gap-2">
                    <p className="font-semibold">Last name:</p>
                    <p>{patient.lastName}</p>
                </span>
                <span className="flex flex-row gap-2">
                    <p className="font-semibold">Age:</p>
                    <p>{patient.age}</p>
                </span>
                <span className="flex flex-row gap-2">
                    <p className="font-semibold">UserID:</p>
                    <p>{patient.userId}</p>
                </span>
            </div>
        </>
    )
}