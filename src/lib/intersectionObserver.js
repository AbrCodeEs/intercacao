document.addEventListener('DOMContentLoaded', () => {
    const animationConfig = {
        'right': 'animate-fade-right',
        'left': 'animate-fade-left'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Determinar la dirección de la animación
                const direction = Array.from(target.classList).find(className =>
                    className.startsWith('animate-trigger-')
                )?.split('-').pop();

                if (direction && animationConfig[direction]) {
                    // Aplicar clases de animación correspondientes
                    target.classList.add(
                        animationConfig[direction],
                        'animate-once',
                        'animate-ease-in-out'
                    );

                    // Eliminar clase de opacidad inicial
                    target.classList.remove('opacity-0');

                    // Opcional: Dejar de observar después de la animación
                    observer.unobserve(target);
                }
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observar todos los elementos con clase de trigger
    document.querySelectorAll('[class*="animate-trigger-"]').forEach(el => {
        // Configuración inicial de opacidad
        el.classList.add('opacity-0');
        observer.observe(el);
    });
});