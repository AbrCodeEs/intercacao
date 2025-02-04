'use client'
import { useState } from 'react';

import { AnimatePresence } from "framer-motion";

import Nav from "@/components/nav";
function Header({ children }: { children: React.ReactNode }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => { setIsActive(!isActive) }} className="button">
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav>
                    {children}
                </Nav>}
            </AnimatePresence>
        </>
    )
}

export { Header };