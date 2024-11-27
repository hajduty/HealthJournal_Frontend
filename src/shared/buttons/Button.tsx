import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Button: React.FC<{ title: string, description: string, icon: ReactNode, navigate: string, className: string }> = ({ title, icon, navigate, className }) => (
    <Link to={navigate}>
        <button className={`${className} h-10 bg-gray-200 rounded-md flex justify-center space-x-2 
        items-center transition duration-200 hover:bg-gray-400 active:bg-gray-500`}
        >
            {icon}
            <p>{title}</p>
        </button>
    </Link>
);