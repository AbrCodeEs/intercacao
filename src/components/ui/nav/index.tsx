import { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from '@/components/ui/link';
import Curve from '@/components/ui/curve';

interface Props { 
    children: React.ReactNode, 
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>, 
    items: { title: string, href: string }[] 
}

export default function index({ children, setIsActive, items }: Props) {

    const [selectedIndicator, setSelectedIndicator] = useState("");

    return (
        <>
            <motion.div
                variants={menuSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="menu"
            >
                <nav className="body">
                    <div className='pt-10 w-full flex justify-center items-center' >
                        {children}
                    </div>
                    <ul className="nav">
                        {
                            items.map((data, index) => {
                                return <Link
                                    key={index}
                                    data={{ ...data, index }}
                                    isActive={selectedIndicator == data.href}
                                    setSelectedIndicator={setSelectedIndicator}
                                    setIsActive={setIsActive}
                                >
                                </Link>
                            })
                        }
                    </ul>
                </nav>
                <Curve />
            </motion.div>
            <div className='fixed size-full top-0 left-0' onClick={() => { setIsActive(false) }} />
        </>
    )
}