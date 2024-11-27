import { useEffect, useState } from "react";
import { searchPatient } from "../../services/patientService";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { SearchResults } from "../../model/searchResults";

export function SearchPatients({
    query,
    onQueryChange,
    onSelectPatient,
    initialPageSize = 5,
    className = "",
}: {
    query: string;
    onQueryChange: (query: string) => void;
    onSelectPatient: (patient: any) => void;
    initialPageSize?: number;
    className?: string;
}) {
    const [results, setResults] = useState<SearchResults | null>(null);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(initialPageSize);

    const totalPages = results ? Math.ceil(results.totalCount / pageSize) : 1;

    useEffect(() => {
        if (query) {
            handleSearching(query, page, pageSize);
        } else {
            setResults(null);
        }

        if (results != null && page > totalPages) {
            setPage(totalPages);
        }
    }, [query, page, pageSize]);

    const handleSearching = async (query: string, page: number, pageSize: number) => {
        try {
            const response = await searchPatient(query, page, pageSize);
            setResults(response?.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={className}>
            {results && (
                <div className="table mt-10 bg-slate-400 rounded-sm animate-fadeIn w-full">
                    <div className="table-header-group bg-slate-800 text-white">
                        <div className="table-row font-thin">
                            <div className="table-cell text-left p-2">Name</div>
                            <div className="table-cell text-left p-2">Age</div>
                            <div className="table-cell text-left p-2">UserID</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        {results.patients.map((patient, index) => (
                            <div
                                key={patient.fullName + patient.userId + patient.age}
                                className={`table-row cursor-pointer ${
                                    index % 2 === 0 ? "bg-slate-300" : "bg-slate-200"
                                }`}
                                onClick={() => onSelectPatient(patient)}
                                role="button"
                            >
                                <div className="table-cell p-2">{patient.fullName}</div>
                                <div className="table-cell p-2">{patient.age}</div>
                                <div className="table-cell p-2">{patient.userId}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {results?.totalCount && (
                <div className="grid grid-cols-3 animate-fadeIn mt-4">
                    <div>
                        <p>
                            Showing {results.patients.length} of {results.totalCount} patients
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => setPage(Math.max(page - 1, 1))}
                                className="text-slate-600"
                            >
                                <IconArrowLeft />
                            </button>
                            <p>
                                Page {page} of {totalPages}
                            </p>
                            <button
                                onClick={() => setPage(Math.min(page + 1, totalPages))}
                                className="text-slate-600"
                            >
                                <IconArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        {[5, 10, 25, 50].map((size) => (
                            <button
                                key={size}
                                onClick={() => setPageSize(size)}
                                className={`${
                                    pageSize === size ? "text-blue-600 underline" : "text-black"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
