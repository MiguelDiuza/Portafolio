import type { LanguageCode } from "./translations";

export interface TechDetail {
  /** Nombre legible que se muestra en el modal. */
  name: string;
  /** Nivel de manejo (0–100). */
  level: number;
  /** Resumen de uso, por idioma. */
  desc: Record<LanguageCode, string>;
}

/**
 * Detalle por tecnología, indexado por el `alt` usado en skillsData.
 * Alimenta el modal que se abre al hacer clic en una tecnología de
 * las tarjetas de habilidades aterrizadas.
 */
export const TECH_DETAILS: Record<string, TechDetail> = {
  React: {
    name: "React",
    level: 85,
    desc: {
      es: "Mi librería principal de frontend. La uso para construir interfaces por componentes, manejar estado e integrar APIs; fue la base del frontend de la web de IA médica y de varios paneles.",
      en: "My main frontend library. I use it to build component-based UIs, manage state and integrate APIs; it powered the medical-AI web frontend and several dashboards.",
    },
  },
  HTML5: {
    name: "HTML5",
    level: 90,
    desc: {
      es: "Maquetación semántica y accesible. Es la estructura base de todos mis proyectos web, cuidando SEO y orden del contenido.",
      en: "Semantic, accessible markup. It's the structural base of all my web projects, with care for SEO and content order.",
    },
  },
  CSS3: {
    name: "CSS3",
    level: 88,
    desc: {
      es: "Estilo, layout responsive y animaciones. Trabajo con Flexbox/Grid, glassmorphism, gradientes y transiciones fluidas para lograr interfaces pulidas.",
      en: "Styling, responsive layout and animation. I work with Flexbox/Grid, glassmorphism, gradients and smooth transitions to ship polished UIs.",
    },
  },
  JS: {
    name: "JavaScript",
    level: 82,
    desc: {
      es: "Lógica de interactividad y consumo de servicios. Lo uso para dinámicas de UI, validaciones y comunicación con back-ends en todos mis sitios.",
      en: "Interactivity logic and service consumption. I use it for UI behavior, validation and back-end communication across all my sites.",
    },
  },
  Python: {
    name: "Python",
    level: 80,
    desc: {
      es: "Mi lenguaje para IA y backend. Lo uso para entrenar modelos, procesar datos y construir APIs; central en el proyecto de visión por computador.",
      en: "My go-to for AI and backend. I use it to train models, process data and build APIs; central to the computer-vision project.",
    },
  },
  NodeJS: {
    name: "Node.js",
    level: 70,
    desc: {
      es: "Back-end en JavaScript. Lo empleo para APIs REST, autenticación y lógica de servidor en proyectos full-stack.",
      en: "JavaScript back-end. I use it for REST APIs, authentication and server logic in full-stack projects.",
    },
  },
  APIs: {
    name: "REST APIs",
    level: 78,
    desc: {
      es: "Diseño y consumo de APIs REST para conectar frontend, back-end y modelos de IA, cuidando contratos claros y manejo de errores.",
      en: "Designing and consuming REST APIs to connect frontend, back-end and AI models, with clean contracts and error handling.",
    },
  },
  MySQL: {
    name: "MySQL",
    level: 72,
    desc: {
      es: "Base de datos relacional para modelar entidades y relaciones. La uso en sistemas de gestión y back-ends con datos estructurados.",
      en: "Relational database for modeling entities and relationships. I use it in management systems and structured-data back-ends.",
    },
  },
  Java: {
    name: "Java",
    level: 65,
    desc: {
      es: "Programación orientada a objetos y lógica de aplicación. Base académica que aplico en estructuras de datos y back-ends.",
      en: "Object-oriented programming and application logic. An academic foundation I apply to data structures and back-ends.",
    },
  },
  Postgre: {
    name: "PostgreSQL",
    level: 74,
    desc: {
      es: "Base de datos relacional robusta. La usé para garantizar integridad entre clientes, proyectos y facturación en el ERP de Motion Dreams.",
      en: "Robust relational database. I used it to ensure integrity across clients, projects and billing in the Motion Dreams ERP.",
    },
  },
  photoshop: {
    name: "Photoshop",
    level: 85,
    desc: {
      es: "Edición y composición de imágenes, retoque y producción de assets para interfaces y piezas gráficas.",
      en: "Image editing and compositing, retouching and asset production for interfaces and graphic pieces.",
    },
  },
  Figma: {
    name: "Figma",
    level: 84,
    desc: {
      es: "Mi herramienta de diseño UI/UX. Diseño wireframes, prototipos y design systems antes de maquetar en código.",
      en: "My UI/UX design tool. I design wireframes, prototypes and design systems before coding the layout.",
    },
  },
  sk: {
    name: "Sketch",
    level: 60,
    desc: {
      es: "Diseño de interfaces y componentes vectoriales, complementario a mi flujo de UI/UX.",
      en: "Interface and vector component design, complementary to my UI/UX workflow.",
    },
  },
  ilustrator: {
    name: "Illustrator",
    level: 78,
    desc: {
      es: "Ilustración vectorial, logotipos e iconografía. Lo uso para crear identidad visual y recursos escalables.",
      en: "Vector illustration, logos and iconography. I use it to create visual identity and scalable assets.",
    },
  },
  Blender: {
    name: "Blender",
    level: 80,
    desc: {
      es: "Modelado, texturizado y animación 3D. Creé personajes y escenarios para el videojuego web desplegado con Unity.",
      en: "3D modeling, texturing and animation. I built characters and environments for the Unity-based web game.",
    },
  },
  Unity: {
    name: "Unity",
    level: 75,
    desc: {
      es: "Motor de videojuegos y experiencias interactivas. Lo usé para construir y desplegar un juego 3D en la web con WebGL.",
      en: "Game and interactive-experience engine. I used it to build and ship a 3D web game with WebGL.",
    },
  },
  Unreal: {
    name: "Unreal Engine",
    level: 55,
    desc: {
      es: "Motor para experiencias 3D de alta fidelidad. Lo exploro para entornos inmersivos y renderizado en tiempo real.",
      en: "Engine for high-fidelity 3D experiences. I explore it for immersive environments and real-time rendering.",
    },
  },
  Maya: {
    name: "Maya",
    level: 60,
    desc: {
      es: "Modelado y animación 3D de nivel profesional, parte de mi formación como tecnólogo en animación.",
      en: "Professional-grade 3D modeling and animation, part of my training as a 3D animation technologist.",
    },
  },
  "Reg Log": {
    name: "Regresión Logística",
    level: 70,
    desc: {
      es: "Modelos de clasificación clásica con Python. Los uso como línea base para problemas de predicción antes de modelos más complejos.",
      en: "Classic classification models with Python. I use them as a baseline for prediction problems before heavier models.",
    },
  },
  PyTorch: {
    name: "PyTorch",
    level: 68,
    desc: {
      es: "Framework de deep learning. Entrené el modelo de detección YOLOv8 para análisis de imágenes médicas con PyTorch.",
      en: "Deep-learning framework. I trained the YOLOv8 detection model for medical image analysis with PyTorch.",
    },
  },
  Scikit: {
    name: "Scikit-learn",
    level: 72,
    desc: {
      es: "Machine learning clásico: preprocesado, entrenamiento y evaluación de modelos sobre datos tabulares.",
      en: "Classic machine learning: preprocessing, training and evaluating models on tabular data.",
    },
  },
  roboflow: {
    name: "Roboflow",
    level: 70,
    desc: {
      es: "Anotación y preparación de datasets de visión por computador. Lo usé para etiquetar imágenes médicas antes de entrenar.",
      en: "Computer-vision dataset annotation and preparation. I used it to label medical images before training.",
    },
  },
  YOLO: {
    name: "YOLOv8",
    level: 70,
    desc: {
      es: "Detección de objetos en tiempo real. Es el modelo que detecta anomalías patológicas en la web de IA médica.",
      en: "Real-time object detection. It's the model that detects pathological anomalies in the medical-AI web app.",
    },
  },
  N8N: {
    name: "n8n",
    level: 65,
    desc: {
      es: "Automatización de flujos y orquestación entre servicios e IA, conectando APIs sin escribir todo el pegamento a mano.",
      en: "Workflow automation and orchestration across services and AI, connecting APIs without hand-writing all the glue.",
    },
  },
};
