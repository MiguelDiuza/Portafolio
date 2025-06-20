import '../styles/SobreMi.css';
import StudiesCards from './subComponents/StudiesCards';

const SobreMi = () => {
    return (
        <section className="sobre-mi">
            {/* Sección izquierda */}
            <div className="sobre-mi__left">
                <h1>¿QUIÉN SOY?</h1>
                <img src="./img/yo.png" alt="Foto de perfil" />
                <p >
                    Soy un apasionado de la programación, el diseño y la tecnología, siempre en la búsqueda de nuevas formas de combinar creatividad y programación.
                    Soy bachiller en Arte Gráfico, tecnólogo en Animación 3D e Ingeniero Multimedia de la UAO, especializándome en Inteligencia Artificial.
                </p>
            </div>

            {/* Sección derecha */}
            <div className="sobre-mi__right">
                <h2  className="titulo-estudios">Educación</h2>
                
                {/* Componente de tarjetas de estudios */}
                <StudiesCards />

            </div>
        </section>
    );
};

export default SobreMi;
