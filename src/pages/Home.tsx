import { IconActivity, IconAmbulance, IconCalendarHeart, IconClipboardHeart } from "@tabler/icons-react";
import Doctor2 from '../assets/undraw_medicine_b-1-ol (1).svg'
import { Button } from "../shared/buttons/Button";
import Wave from '../assets/wave.svg'
import { WavyDivider } from "../shared/WavyDivider";

export function Home() {
    return (
        <>
            <div className="relative">
                <div className="flex flex-col justify-center items-center text-2xl lg:text-4xl md:p-40 lg:px-72 p-8 bg-slate-100">
                    <div className="flex lg:flex-row flex-col justify-around items-center w-full gap-8">
                        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
                            <h1 className="font-semibold">Welcome to HealthJournal</h1>
                            <p className="text-sm text-gray-600">Streamlined Patient Care and Wellness</p>
                            <Button title={"Get started"} description={""} icon={<IconAmbulance />} navigate={"login"} className={"bg-slate-800 text-white text-sm w-32"} />
                        </div>
                        <img src={Doctor2} className=" max-w-sm lg:w-1/2 w-1/2" alt="Doctor illustration" />
                    </div>
                    <div className="absolute -bottom-0.5 left-0 w-full">
                        <WavyDivider className={"fill-slate-300"} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center bg-slate-300 lg:text-3xl text-2xl p-10 py-24 gap-16 shadow-lg">
                <div className="flex flex-col justify-center items-center gap-8">
                    <h2 className="text-4xl font-semibold text-slate-800">For Doctors</h2>
                    <p className="text-xl text-slate-600 text-center">
                        Simplify patient management and provide better care.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                        <div className="flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <IconCalendarHeart size={40} className="text-blue-900 mb-4" />
                            <h3 className="text-lg font-bold text-slate-800">Log Encounters</h3>
                            <p className="text-sm text-slate-600">Record your medical visits and track follow-ups.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <IconActivity size={40} className="text-blue-900 mb-4" />
                            <h3 className="text-lg font-bold text-slate-800">Add Observations</h3>
                            <p className="text-sm text-slate-600">Document your findings quickly and securely.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded shadow-md">
                            <IconClipboardHeart size={40} className="text-blue-900 mb-4" />
                            <h3 className="text-lg font-bold text-slate-800">Track Conditions</h3>
                            <p className="text-sm text-slate-600">Manage ongoing treatments and update records in real time.</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm">Empowering you with the tools to focus on what matters most—your patients.</p>
            </div>
        </>
    )
}