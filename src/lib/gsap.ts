import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registro central de GSAP. Importar este módulo garantiza que los plugins
 * estén registrados una sola vez y de forma segura para SSR.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
