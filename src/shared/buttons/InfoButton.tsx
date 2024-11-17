import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const InfoButton: React.FC<{ title: string, description: string, icon: ReactNode, location: string }> = (props) => (
    <Link to={props.location}>
        <div className="flex flex-col border-slate-800 border-1 w-96 h-44 rounded-xl p-4 gap-2 hover:bg-slate-300 duration-200 transform shadow-xl">
            <span className="flex flex-row gap-2 items-center">
                {props.icon}
                <h1 className="text-xl font-semibold">{props.title}</h1>
            </span>
            <p>{props.description}</p>
        </div>
    </Link>
);