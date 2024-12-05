import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const InfoButton: React.FC<{ title: string, description: string, icon: ReactNode, location: string }> = ({ title, description, icon, location }) => (
    <Link to={location}>
        <div className="flex flex-col border-slate-800 border-1 md:w-96 h-44 rounded-xl p-4 gap-2 hover:bg-slate-300 duration-200 transform shadow-xl">
            <span className="flex flex-row gap-2 items-center">
                {icon}
                <h1 className="md:text-xl text-sm font-semibold">{title}</h1>
            </span>
            <p className="lg:text-base text-sm">{description}</p>
        </div>
    </Link>
);