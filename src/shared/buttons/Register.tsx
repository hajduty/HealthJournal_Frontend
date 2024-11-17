import { IconUserCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <Link to={"register"}>
            <button className="w-28 h-10 bg-gray-200 rounded-md flex justify-center space-x-2 items-center transition duration-200 hover:bg-gray-400 active:bg-gray-500">
                <IconUserCheck />
                <p>Register</p>
            </button>
        </Link>
    )
}