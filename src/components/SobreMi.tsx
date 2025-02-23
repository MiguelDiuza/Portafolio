import '../styles/SobreMi.css';
import StudiesCards from './subComponents/StudiesCards';

const SobreMi = () => {
    return (
        <section className="sobre-mi">
            {/* Sección izquierda */}
            <div className="sobre-mi__left">
                <h2>¿QUIÉN SOY?</h2>
                <img src="/img/yo.avif" alt="Foto de perfil" />
                <p>
                    Soy un apasionado del diseño y la tecnología, siempre en la búsqueda de nuevas formas de combinar creatividad y programación.
                    Soy bachiller en Arte Gráfico, tecnólogo en Animación 3D e Ingeniero Multimedia de la UAO, especializándome en Inteligencia Artificial.
                </p>
            </div>

            {/* Sección derecha */}
            <div className="sobre-mi__right">
                <h2 className="titulo-estudios">Estudios</h2>
                
                {/* Componente de tarjetas de estudios */}
                <StudiesCards />

                {/* Cursos y certificaciones */}
                <div className="sobre-mi__certifications">
                    <h3>CURSOS Y CERTIFICACIONES</h3>
                    <button>VER</button>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
