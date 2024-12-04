import { Observation } from "../../model/observation"

export const ObservationsTable = ({ observations }: { observations: Observation[] | null }) => {
    if (observations == null)
        return (
            <>
                Select an encounter.
            </>
        )

    return (
        <>
            <h1 className="text-lg font-semibold">Observations</h1>
            <div className="table bg-slate-400 rounded-sm animate-fadeIn w-full">
                <div className="table-header-group bg-slate-800 text-white">
                    <div className="table-row font-thin">
                        <div className="table-cell text-left p-2">Type</div>
                        <div className="table-cell text-left p-2">Value</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {observations.map((observation, index) => (
                        <div key={index}
                            className={`table-row ${index % 2 === 0 ? "bg-slate-300" : "bg-slate-200"}`}
                        >
                            <div className="table-cell p-2">{observation.type}</div>
                            <div className="table-cell p-2">{observation.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}