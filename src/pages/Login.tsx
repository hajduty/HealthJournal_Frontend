import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { loginUser } from "../services/authService";

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const { login, authenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await loginUser(email, password);
            login(response.data.token, response.data.email);
            navigate('/');
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="flex flex-col h-screen justify-items-center justify-center align-middle items-center bg-black">
            <div className="bg-slate-900 w-96 h-96 text-white rounded-md">
                <div className="flex flex-col gap-4 align-middle items-center h-full p-6">
                    <form onSubmit={handleLogin} className="w-full flex flex-col space-y-4">
                        <p className="text-3xl">HealthJournal</p>
                        <p className="text-xl">Login</p>
                        <input
                            className=" text-black bg-slate-300 rounded-sm p-2 placeholder-slate-500"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className=" text-black bg-slate-300 rounded-sm p-2 placeholder-slate-500"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="bg-slate-500 w-full h-10 rounded-md space-y-64 hover:bg-slate-700 transition duration-200 active:bg-slate-900 active:duration-0">
                            <p>Login</p>
                        </button>
                        {error && <>
                            <p className="text-center text-gray-400">Error while logging in, wrong password?</p>
                        </>}
                    </form>
                    <span className='text-start flex column space-x-2'>
                        <p className="text-gray-400">No account?</p>
                        <Link to="/register">
                            <p className='underline'>Register</p>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}