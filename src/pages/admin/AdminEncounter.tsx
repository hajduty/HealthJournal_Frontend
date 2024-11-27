import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { SearchPatients } from "../../shared/admin/SearchPatient";

export function AdminEncounter() {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>("");
    const [patient, setPatient] = useState<any>();
    const [placeholder, setPlaceholder] = useState<string>("Name...");

    const handleQueryChange = (newQuery: string) => setQuery(newQuery);

    const handlePatientSelect = (patient: any) => {
        console.log("Selected patient:", patient);
        setPlaceholder(patient.fullName);
        setQuery("");
        setPatient(patient);
    };

    return (
        <div className="grid lg:grid-cols-3 grid-rows-3  lg:mx-20 md:mx-40 lg:my-16 m-16 gap-6 text-slate-900">
            <div className="flex flex-col">
                <p className="text-lg text-slate-700">Select Patient</p>
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
            </div>
            <div className="flex flex-col">
                <p className="text-lg text-slate-700">Add encounter</p>
                <div className="p-3 border-1 bg-slate-600">
                    <input type="text" placeholder=""/>
                </div>
            </div>
        </div>
    );
}
