import { IconLogout } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export function Logout() {
    const { logout } = useAuth();

    return (
        <Link to={"login"}>
            <button onClick={logout} className="w-24 h-10 border-slate-200 text-slate-50 border-2 
            rounded-md flex justify-center space-x-1 items-center transition duration-200 hover:bg-slate-700 active:bg-slate-800 hover:border-slate-500">
                <IconLogout />
                <p className="text-sm">Logout</p>
            </button>
        </Link>
    )
}