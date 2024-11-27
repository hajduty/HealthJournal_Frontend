import { IconUserCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <Link to={"register"}>
            <button
                className="w-28 h-10 border-slate-200 text-slate-50 border-1 rounded-md flex justify-center
                space-x-1 items-center transition duration-200 hover:bg-slate-700 active:bg-slate-800 hover:border-slate-500"
            >
                <IconUserCheck />
                <p>Sign up</p>
            </button>
        </Link>
    )
}