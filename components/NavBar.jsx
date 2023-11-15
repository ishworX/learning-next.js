"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import dynamic from 'next/dynamic';


const navLinks = [
    {
        title: "Discord Bots",
        path: "https://whoisrabbit.com/projects",
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/ishwor-tandon-42a4351b9/",
    },
    {
        title: "GitHub",
        path: "https://github.com/ishworX",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const DynamicThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
    ssr: false,
});


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg--default bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link
                    href="/"
                    className="text-2xl md:text-5xl text--colors_default font-semibold"
                >
                    Ishwor
                </Link>
                <div className="block md:hidden">
                    {!navbarOpen ? (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text--colors_default border-colors_default hover:text-colors_default hover:border-colors_default"
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text--colors_default border--colors_default hover:text--colors_default hover:border-colors_default"
                            onClick={() => setNavbarOpen(false)}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                        )}
                    <DynamicThemeSwitcher /> 
                </div>
                <div className="hidden md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8">
                        {navLinks.map((link) => {
                            return (
                                <li>
                                    <NavLink
                                        key={link.title}
                                        title={link.title}
                                        href={link.path}
                                    />
                                </li>
                            );
                        })}
                    <DynamicThemeSwitcher /> 
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;