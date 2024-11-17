import { IconUser } from "@tabler/icons-react";

export function Login() {
    return(
        <button className="w-28 h-10 bg-slate-200 rounded-md flex justify-center space-x-2 items-center transition duration-200 hover:bg-slate-400 active:bg-slate-500">
            <IconUser/>
            <a>Login</a>
        </button>
    )
}