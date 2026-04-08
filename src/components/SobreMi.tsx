import '../styles/SobreMi.css';
import StudiesCards from './subComponents/StudiesCards';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './idiomas';

const SobreMi = () => {
    const { t, language } = useLanguage();
    const text = t("about_text");
    const [displayedText, setDisplayedText] = useState("");
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, amount: 0.5 });
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    // Reinicia el efecto de tipeado cuando cambia el idioma
    useEffect(() => {
        setDisplayedText("");
        setIsTypingComplete(false);
    }, [language, text]);

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
            }, 8); // Velocidad de escritura: 8ms por caracter
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
                    {t("about_title")}
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
                <h2 className="titulo-estudios">{t("edu_title")}</h2>
                <StudiesCards />
            </motion.div>
        </section>
    );
};

export default SobreMi;



