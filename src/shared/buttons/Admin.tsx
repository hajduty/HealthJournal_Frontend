import { IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Admin() {
    return (
        <Link to={"admin"}>
            <button className="w-36 h-10 bg-gray-200 rounded-md flex justify-center space-x-2 items-center transition duration-200 hover:bg-gray-400 active:bg-gray-500">
                <IconUser />
                <p>Admin Panel</p>
            </button>
        </Link>
    )
}