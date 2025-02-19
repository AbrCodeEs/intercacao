'use client'
import { useState } from 'react';

import { AnimatePresence } from "framer-motion";

import Nav from "@/components/ui/nav";


function Header({ children, items }: { children: React.ReactNode, items: { title: string, href: string }[] }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => { setIsActive(!isActive) }} className="button">
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav setIsActive={setIsActive} items={items}>
                    {children}
                </Nav>}
            </AnimatePresence>
        </>
    )
}

export { Header };