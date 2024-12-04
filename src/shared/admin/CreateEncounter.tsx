import { useRef, useState } from "react";
import { Observation } from "../../model/observation";
import { IconCalendar, IconCloudUp, IconPlus, IconRowRemove } from "@tabler/icons-react";
import React from "react";
import DatePicker from "react-datepicker";
import { Patient } from "../../model/patient";
import { addEncounter } from "../../services/encounterService";
import { Encounter } from "../../model/encounter";

const DateButton = React.forwardRef<HTMLButtonElement, any>(({ value, onClick }) => (
    <button onClick={onClick} className={`bg-slate-200 w-44 h-8 rounded-sm flex flex-row justify-center items-center gap-4 hover:bg-slate-400 active:bg-slate-500 border-slate-900 border-1`}>
        <IconCalendar />
        {value || 'Select Date'}
    </button>
));

export const CreateEncounter = ({ patient }: { patient: Patient }) => {
    const [date, setDate] = useState<Date>(new Date());
    const [observation, setObservation] = useState<Observation[]>([{ encounterId: 0, patientId: 0, type: "", value: 0 }]);
    const formRef = useRef<HTMLFormElement | null>(null);

    const addObservation = () => {
        var obs: Observation = { patientId: patient!.id, encounterId: 0, type: "", value: 0 };
        setObservation((prevObservations) => [...prevObservations, obs]);
    };

    const removeObservation = (obs: Observation) => {
        setObservation((prevObservations) =>
            prevObservations.filter((observation) => observation !== obs)
        );
    };

    const submitObservation = async () => {
        const encounter: Encounter = { date, observations: observation, patientId: patient.id };
        const response = await addEncounter(encounter)
        if (response?.status == 200) {
            setObservation([]);
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission on Enter key
        }
    };

    return (
        <div className="flex flex-col">
            <p className="text-lg text-slate-700 font-semibold">Add encounter</p>
            <div className="p-5 bg-slate-300 rounded-sm flex flex-col gap-8 min-h-96">
                <span className="flex flex-col gap-3 text-sm">
                    <p className="text-lg">Date</p>
                    <DatePicker selected={date} onChange={(d) => setDate(d!)} customInput={<DateButton className="bg-white text-whites" />} />
                </span>

                <form ref={formRef} className="overflow-y-auto max-h-fit flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); submitObservation();}}
                    onKeyDown={handleKeyDown}>
                    {observation.map((obs, index) => (
                        <div
                            key={index}
                            className="flex flex-col text-black items-start justify-between gap-4 bg-slate-200 shadow-md border-1 border-slate-400 p-3 rounded-sm"
                        >
                            <h3 className="text-black font-semibold text-lg">Observation {index + 1}</h3>
                            <div className="flex flex-row justify-between w-full gap-2 items-end">
                                <span className="w-full">
                                    <p>Type</p>
                                    <input
                                        className="w-full text-white p-2 rounded-sm outline-none bg-slate-800 focus:bg-slate-600 transition duration-200"
                                        value={obs.type}
                                        required={true}
                                        onChange={(e) => {
                                            const updatedType = e.target.value;
                                            setObservation((prevObservations) =>
                                                prevObservations.map((o, i) =>
                                                    i === index ? { ...o, type: updatedType } : o
                                                )
                                            );
                                        }}
                                    />
                                </span>
                                <span className="w-full">
                                    <p>Value</p>
                                    <input
                                        className="w-full text-white p-2 rounded-sm outline-none bg-slate-800 focus:bg-slate-600 transition duration-200"
                                        value={obs.value}
                                        type="number"
                                        required={true}
                                        step="0.01"
                                        onChange={(e) => {
                                            const updatedValue = parseFloat(e.target.value);
                                            setObservation((prevObservations) =>
                                                prevObservations.map((o, i) =>
                                                    i === index ? { ...o, value: isNaN(updatedValue) ? 0 : updatedValue } : o
                                                )
                                            );
                                        }}
                                    />
                                </span>
                                <button
                                    className="bg-red-400 text-black text-sm flex flex-row justify-center items-center p-1 rounded-sm h-10 hover:bg-red-500 active:bg-red-600 transition duration-150"
                                    onClick={() => removeObservation(obs)}
                                    type="button"
                                >
                                    <IconRowRemove />
                                </button>
                                <button className="hidden" type="submit">hello</button>
                            </div>
                        </div>
                    ))}
                </form>
                <span className="flex flex-row justify-between">
                    <button className="bg-slate-200 text-sm h-8 w-44 rounded-sm hover:bg-slate-400 active:bg-slate-500 border-1 border-slate-900" onClick={() => addObservation()}>
                        <span className="flex flex-row items-center justify-center gap-2">
                            <IconPlus />
                            Add Observation
                        </span>
                    </button>
                    {observation.length > 0 &&
                        <button className="bg-green-400 text-sm h-8 w-44 rounded-sm hover:bg-green-500 active:bg-green-600 border-1 border-slate-900" onClick={() => formRef.current?.requestSubmit()}>
                            <span className="flex flex-row items-center justify-center gap-2">
                                <IconCloudUp />
                                Submit Observation
                            </span>
                        </button>
                    }
                </span>
            </div>
        </div>
    );
};
