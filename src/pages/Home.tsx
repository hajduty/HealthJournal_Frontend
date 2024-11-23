import { IconActivity } from "@tabler/icons-react";

export function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-4xl p-32 py-80 bg-slate-100">
                <div className="flex flex-row justify-around items-center w-full">
                    <div>
                        <h1 className="font-semibold">Welcome to HealthJournal</h1>
                        <p className="text-sm">Your Partner in Streamlined Patient Care and Wellness</p>
                    </div>
                    <IconActivity className="h-24 w-24"></IconActivity>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-slate-300 text-3xl p-10 py-24 gap-16 rounded-lg shadow-lg">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-4xl font-semibold text-slate-800">For Doctors</h2>
                    <p className="text-xl text-slate-600 text-center">
                        Simplify patient management and provide better care.
                    </p>
                </div>
                <ul className="list-disc text-lg text-slate-700 space-y-4 pl-6">
                    <li>
                        <span className="font-semibold text-slate-800">Log Encounters:</span> Record your medical visits and track follow-ups.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-800">Add Observations:</span> Document your findings quickly and securely.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-800">Track Conditions:</span> Manage ongoing treatments and update records in real time.
                    </li>
                </ul>
                <p className="text-sm">Empowering you with the tools to focus on what matters most—your patients.</p>
            </div>
        </>
    )
}