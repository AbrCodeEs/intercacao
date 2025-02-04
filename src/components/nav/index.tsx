import { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from '@/components/link';
import Curve from '@/components/curve';

const navItems = [
    {
        title: "Inicio",
        href: "#section-home",
    },
    {
        title: "Evaluación",
        href: "#section-assessment",
    },
    {
        title: "Beneficio",
        href: "#section-benefit",
    },
    {
        title: "Trazabilidad",
        href: "#section-traceability",
    },
    {
        title: "Ubicación",
        href: "#section-location",
    },
    {
        title: "Historia",
        href: "#section-history",
    },
    {
        title: "Responsabilidad Social",
        href: "#section-responsive",
    }
]

export default function index({ children }: { children: React.ReactNode }) {

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
                <div className='pt-10 w-full flex justify-center items-center'>
                    {children}
                </div>
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