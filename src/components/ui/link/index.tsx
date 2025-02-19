import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide, scale } from '../nav/anim';

export default function Index({ data, isActive, setSelectedIndicator, setIsActive }: { data: { title: string, href: string, index: number }, isActive: boolean, setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { title, href, index } = data;

    useEffect(() => {
        const handleClick = (e: Event) => {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            const targetId = href.substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId);

            // Aplicamos una clase para iniciar la animación CSS
            targetElement?.classList.add("active");

            // Desplazamiento suave
            window.scrollTo({
                top: targetElement?.offsetTop,
                behavior: "smooth",
            });
        };

        // Añadir el evento de clic al enlace
        const linkElement = document.querySelector(`a[href='${href}']`);
        linkElement?.addEventListener('click', handleClick);

        // Limpiar el evento al desmontar el componente
        return () => {
            linkElement?.removeEventListener('click', handleClick);
        };
    }, [href]);

    return (
        <motion.li
            className="link uppercase px-7 py-2 text-lg hover:bg-[#30261f]"
            onMouseEnter={() => { setSelectedIndicator(href); /* setIsActive(true)  */}}
            // onMouseLeave={() => { setIsActive(false) }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={() => { setIsActive(false) }}
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className="indicato"
            ></motion.div>
            <a href={href}>{title}</a>
        </motion.li>
    );
}
