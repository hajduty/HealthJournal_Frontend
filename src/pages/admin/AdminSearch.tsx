import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { SearchPatients } from "../../shared/admin/SearchPatient";

export function AdminSearch() {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>("");

    const handleQueryChange = (newQuery: string) => setQuery(newQuery);

    const handlePatientSelect = (patient: any) => {
        console.log("Selected patient:", patient);
        navigate("/home");
    };

    return (
        <div className="flex flex-col align-middle items-center justify-center m-20 gap-8 text-slate-900">
            <span className="flex-row flex justify-center items-center gap-4">
                <p className="text-4xl text-slate-700 font-extralight">Patient Search</p>
                <IconSearch />
            </span>
            <input
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="p-4 w-1/4 text-lg bg-slate-800 outline-none rounded-md text-white focus:placeholder-slate-350 placeholder-slate-200 shadow-lg focus:bg-slate-600 transition duration-200"
                type="text"
                placeholder="Name..."
            />
            <SearchPatients
                query={query}
                onQueryChange={handleQueryChange}
                onSelectPatient={handlePatientSelect}
                className="w-1/2"
            />
        </div>
    );
}
