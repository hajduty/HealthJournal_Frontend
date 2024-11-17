import { Outlet } from "react-router-dom";
import { Navbar } from "./shared/Navbar";
import React from "react";

export const MainLayout: React.FC = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);