import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { EncounterPaginated } from "../../model/encounterPaginated";
import { getEncounters } from "../../services/encounterService";

export function EncountersTable({
    initialPageSize = 5,
    className = "",
    onSelectEncounter,
    patientId,
}: {
    onSelectEncounter: (encounter: any) => void;
    initialPageSize?: number;
    className?: string;
    patientId: number
}) {
    const [results, setResults] = useState<EncounterPaginated | null>(null);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(initialPageSize);

    const totalPages = results ? Math.ceil(results.totalCount / pageSize) : 1;

    useEffect(() => {
        handleSearching(page, pageSize);
    }, [page, pageSize]);

    const handleSearching = async (page: number, pageSize: number) => {
        try {
            const response = await getEncounters(patientId, page, pageSize);
            setResults(response?.data);
            console.log(results);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <h1 className="text-lg font-semibold">Encounters</h1>
            <div className={className}>
                {results && (
                    <div className="table bg-slate-400 rounded-sm w-full">
                        <div className="table-header-group bg-slate-800 text-white">
                            <div className="table-row font-thin">
                                <div className="table-cell text-left p-2">Date</div>
                                <div className="table-cell text-left p-2">Observations</div>
                                <div className="table-cell text-left p-2">EncounterID</div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            {results.encounters.map((encounter, index) => (
                                <div
                                    key={index}
                                    className={`table-row cursor-pointer ${index % 2 === 0 ? "bg-slate-300" : "bg-slate-200"
                                        }`}
                                    onClick={() => onSelectEncounter(encounter)}
                                    role="button"
                                >
                                    <div className="table-cell p-2">{new Date(encounter.date).toDateString()}</div>
                                    <div className="table-cell p-2">{encounter.observations.length}</div>
                                    <div className="table-cell p-2">{encounter.id}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {results?.totalCount && (
                    <div className="grid grid-cols-3 mt-4 lg:text-base text-xs">
                        <div>
                            <p>
                                Showing {results.encounters.length} of {results.totalCount} encounters
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
                                <p className="">
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
                                    className={`${pageSize === size ? "text-blue-600 underline" : "text-black"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
