import '../styles/SobreMi.css';
import StudiesCards from './subComponents/StudiesCards';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const SobreMi = () => {
    const text = "Soy un apasionado de la programación, el diseño y la tecnología, siempre en la búsqueda de nuevas formas de combinar creatividad y programación. Soy bachiller en Arte Gráfico, tecnólogo en Animación 3D e Ingeniero Multimedia de la UAO, especializándome en Inteligencia Artificial.";
    const [displayedText, setDisplayedText] = useState("");
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, amount: 0.5 });
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (isInView && !isTypingComplete) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTypingComplete(true);
                }
            }, 20); // Velocidad de escritura: 20ms por caracter
            return () => clearInterval(typingInterval);
        }
    }, [isInView, isTypingComplete]);

    return (
        <section className="sobre-mi">
            {/* Sección izquierda */}
            <motion.div
                className="sobre-mi__left glass-panel"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="perfil-container">
                    <img src={`${import.meta.env.BASE_URL}img/yo.png`} alt="Foto de perfil" className="perfil-foto" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    ¿QUIÉN SOY?
                </motion.h1>
                <div className="sobre-mi__desc" ref={textRef}>
                    <div className="typing-container">
                        {/* Texto invisible para reservar espacio */}
                        <p className="typing-placeholder" aria-hidden="true">
                            {text}
                        </p>
                        {/* Texto visible animado */}
                        <p className="typing-text">
                            {displayedText}
                            {!isTypingComplete && <span className="typing-cursor">|</span>}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sección derecha */}
            <motion.div
                className="sobre-mi__right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="titulo-estudios">Educación</h2>
                <StudiesCards />
            </motion.div>
        </section>
    );
};

export default SobreMi;



