import { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from '@/components/link';
import Curve from '@/components/curve';

const navItems = [
    {
        title: "Home",
        href: "#section-one",
    },
    {
        title: "About",
        href: "#section-two",
    },
    {
        title: "Contact",
        href: "#section-three",
    },
    {
        title: "Work",
        href: "#section-four",
    },
]

export default function index() {

    const [selectedIndicator, setSelectedIndicator] = useState("");

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="menu"
        >
            <nav className="body">
                <ul className="nav">
                    {
                        navItems.map((data, index) => {
                            return <Link
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}>
                            </Link>
                        })
                    }
                </ul>
            </nav>
            <Curve />
        </motion.div>
    )
}