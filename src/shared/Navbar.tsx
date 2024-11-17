import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { Admin } from "./buttons/Admin";
import { Login } from "./buttons/Login";
import { Logout } from "./buttons/Logout";

export function Navbar() {
    const { authenticated } = useAuth();

    return (
        <>
            <div className="bg-slate-600 w-fill h-36 flex justify-around items-center">
                <Link to={"/"}>
                    <h1 className="text-white text-4xl">HealthJournal</h1>
                </Link>
                {!authenticated ?
                    <Login />
                    :
                    <AdminView />
                }
            </div>
        </>
    )
}

const AdminView: React.FC = () => (
    <div className="flex flex-row gap-4">
        <Admin />
        <Logout />
    </div>
);