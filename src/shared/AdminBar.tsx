import { Link } from "react-router-dom";

export function AdminBar() {
    return (
        <div className="bg-slate-400 w-fill h-10 flex gap-16 px-96 items-center underline text-slate-900">
            <Link to={"search"}>
                <p>Patient search</p>
            </Link>
            <Link to={"encounter"}>
                <p>New encounter</p>
            </Link>
            <Link to={"patients"}>
                <p>User list</p>
            </Link>
        </div>
    )
}