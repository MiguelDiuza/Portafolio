import '../styles/SobreMi.css';
import StudiesCards from './subComponents/StudiesCards';
import { motion } from 'framer-motion';

const SobreMi = () => {
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
                <div className="sobre-mi__desc">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Soy un apasionado de la programación, el diseño y la tecnología, siempre en la búsqueda de nuevas formas de combinar creatividad y programación. Soy bachiller en Arte Gráfico, tecnólogo en Animación 3D e Ingeniero Multimedia de la UAO, especializándome en Inteligencia Artificial.
                    </motion.p>
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



