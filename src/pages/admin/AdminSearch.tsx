import { useNavigate } from "react-router-dom"
import { searchPatient } from "../../services/patientService";
import { useEffect, useState } from "react";
import { SearchResults } from "../../model/searchResults";
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons-react";

export function AdminSearch() {
    const navigate = useNavigate();
    const [results, setResults] = useState<SearchResults | null>();
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);
    const [query, setQuery] = useState<string>("");

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

    }, [page, query, pageSize])

    const handleSearching = async (query: string, page: number, pageSize: number) => {

        try {
            const response = await searchPatient(query, page, pageSize);
            setResults(response?.data)
        } catch (err) {
            console.log(err);
        }
    }

    const onSearching = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
        setPage(1);
    }

    return (
        <>
            <div className="flex flex-col align-middle items-center justify-center m-20 gap-8 text-slate-900">
                <span className="flex-row flex justify-center items-center gap-4">
                    <p className="text-4xl text-slate-700 font-extralight">Patient Search</p>
                    <IconSearch />
                </span>
                <input onChange={onSearching} className="p-4 w-1/4 text-lg bg-slate-800 outline-none rounded-md text-white focus:placeholder-slate-350 placeholder-slate-200  shadow-lg focus:bg-slate-600 transition duration-200" type="text" placeholder="Name..." />
                {results != null && (
                    <div className="table mt-10 bg-slate-400 rounded-sm lg:w-1/2 w-96 animate-fadeIn">
                        <div className="table-header-group bg-slate-800 text-white">
                            <div className="table-row font-thin">
                                <div className="table-cell text-left p-2">Name</div>
                                <div className="table-cell border-x-1 border-slate-500 text-left p-2">Age</div>
                                <div className="table-cell text-left p-2">UserID</div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            {results.patients.map((patient, index) => (
                                <a
                                    className={`table-row cursor-pointer ${index % 2 === 0 ? 'bg-slate-300' : 'bg-slate-200'}`}
                                    onClick={() => navigate("/home")}
                                    role="button"
                                    key={patient.fullName + patient.userId + patient.age}
                                >
                                    <div className={`table-cell p-2`}>
                                        {patient.fullName}
                                    </div>
                                    <div className="table-cell p-2 border-x-1 border-slate-900">
                                        {patient.age}
                                    </div>
                                    <div className="table-cell p-2">{patient.userId}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
                {results?.totalCount != null &&
                    <div className="grid grid-cols-3 lg:w-1/2 w-96 animate-fadeIn">
                        <div>
                            <p>Showing {results.patients.length} of {results.totalCount} patients</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-row gap-4 justify-center items-center align-middle">
                                <button
                                    onClick={() => setPage(Math.max(page - 1, 1))}
                                    className="text-slate-600"
                                >
                                    <IconArrowLeft />
                                </button>
                                <p>
                                    Page {page} of {Math.ceil(results?.totalCount / pageSize)}
                                </p>
                                <button
                                    onClick={() => { setPage(Math.min(page + 1, Math.ceil(results?.totalCount / pageSize))); }}
                                    className="text-slate-600"
                                >
                                    <IconArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button className={`${pageSize == 5 ? 'text-blue-600 underline' : 'text-black'}`} onClick={() => setPageSize(5)}>5</button>
                            <button className={`${pageSize == 10 ? 'text-blue-600 underline' : 'text-black'}`} onClick={() => setPageSize(10)}>10</button>
                            <button className={`${pageSize == 25 ? 'text-blue-600 underline' : 'text-black'}`} onClick={() => setPageSize(25)}>25</button>
                            <button className={`${pageSize == 50 ? 'text-blue-600 underline' : 'text-black'}`} onClick={() => setPageSize(50)}>50</button>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}