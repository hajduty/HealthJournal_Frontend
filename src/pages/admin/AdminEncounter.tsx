import { useState } from "react";
import { SearchPatients } from "../../shared/admin/SearchPatient";
import "react-datepicker/dist/react-datepicker.css";
import { Patient } from "../../model/patient";
import { CreateEncounter } from "../../shared/admin/CreateEncounter";
import { motion, AnimatePresence } from "framer-motion";
import { PatientDetails } from "../../shared/admin/PatientDetails";

export function AdminEncounter() {
    const [query, setQuery] = useState<string>("");
    const [patient, setPatient] = useState<Patient>();
    const [placeholder, setPlaceholder] = useState<string>("Name...");
    const handleQueryChange = (newQuery: string) => setQuery(newQuery);

    const handlePatientSelect = (patient: Patient) => {
        console.log("Selected patient:", patient);
        setPlaceholder(patient.firstName + " " + patient.lastName);
        setQuery("");
        setPatient(patient);
    };

    return (
        <div className="grid lg:grid-cols-3 grid-flow-row auto-rows-max lg:mx-20 md:mx-8 lg:my-16 m-2 gap-4 text-slate-900">
            <div className="flex flex-col">
                <p className="text-lg text-slate-700 font-semibold">Select Patient</p>
                <input
                    value={query}
                    onChange={(e) => handleQueryChange(e.target.value)}
                    className="p-3 text-md bg-slate-800 outline-none rounded-sm text-white focus:placeholder-slate-350 placeholder-slate-200 shadow-lg focus:bg-slate-600 transition duration-200"
                    type="text"
                    placeholder={placeholder}
                />
                <SearchPatients
                    query={query}
                    onQueryChange={handleQueryChange}
                    onSelectPatient={handlePatientSelect}
                    className="w-full"
                />
                <AnimatePresence>
                    {patient && (
                        <motion.div
                            key="create-encounter"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.75 }}
                            className="my-4"
                        >
                            <PatientDetails patient={patient} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {patient && (
                    <motion.div
                        key="create-encounter"
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className="sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 col-span-1"
                    >
                        <CreateEncounter patient={patient} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
