import { IconHeartRateMonitor, IconSearch } from "@tabler/icons-react";
import { useAuth } from "../../auth/AuthContext";
import { InfoButton } from "../../shared/buttons/InfoButton";

export function AdminHome() {
    const { user } = useAuth();

    return (
        <>
            <div className="flex flex-col align-middle items-center justify-center m-20 gap-16 text-slate-900">
                <p className="text-2xl">Welcome back, {user?.email}</p>
                <div className="flex flex-row gap-8">
                    <InfoButton
                        title={"Search patients"}
                        description={"Search through patient records to quickly find information such as appointments, or contact details."}
                        location="search"
                        icon={<IconSearch />}
                    />
                    <InfoButton
                        title={"New Encounter"}
                        description={"Create a new encounter for a patient to document their visit, symptoms, diagnoses, or treatments provided."}
                        icon={<IconHeartRateMonitor />}
                        location="encounter"
                    />
                </div>
            </div>
        </>
    )
}