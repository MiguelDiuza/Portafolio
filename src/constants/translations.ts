export const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_video: "Video",
    nav_contact: "Contact Me",

    // Hero / Intro
    hero_title: "MULTIMEDIA \n ENGINEER",
    hero_subtitle: "MIGUEL ANGEL DIUZA M.",
    hero_desc: "Full-Stack Developer | UI/UX Designer | Machine Learning Engineer",

    // About Me
    about_title: "WHO AM I?",
    about_text: "I am passionate about programming, design, and technology, always looking for new ways to combine creativity and coding. I have a technical degree in Graphic Arts, I am a 3D Animation Technologist, and a Multimedia Engineer from UAO, specializing in Artificial Intelligence.",

    // Studies
    edu_title: "Education",
    study_art_title: "Technical Degree in Graphic Art",
    study_art_years: "2012 - 2018",
    study_art_desc: "Comprehensive technical training focused on visual design fundamentals, digital illustration techniques, and pre-press processes. Specialization in creative conceptualization for print and digital media.",
    
    study_anim_title: "3D Animation Technologist",
    study_anim_years: "2019 - 2021",
    study_anim_desc: "Advanced training in the complete digital production pipeline. Includes 3D polygonal modeling, advanced rigging, character animation, cinematic lighting, and visual effects (VFX) compositing for multimedia productions.",

    study_eng_title: "Multimedia Engineering",
    study_eng_years: "2021 - 2026",
    study_eng_badge: "graduation scheduled May 26",
    study_eng_desc: "Transdisciplinary academic program that merges software engineering with interactive experience design. Specialization in digital product development, immersive interfaces, and multimedia technology project management.",

    study_ai_title: "Specialization in AI",
    study_ai_years: "Currently studying",
    study_ai_badge: "1/2 semesters approved",
    study_ai_desc: "Cutting-edge postgraduate studies aimed at predictive analysis and intelligent automation. In-depth study of neural network architectures, computer vision, natural language processing, and the deployment of Machine Learning models in production environments.",

    study_extra_title: "Additional Courses",
    study_extra_years: "2013 - Present",
    study_extra_desc: "Continuous and self-taught training path through international certifications in web development, backend, cloud infrastructure, and strategic design. A constant commitment to technical updating in an ever-changing digital ecosystem.",
    study_no_pdf: "No preview available.",
    study_view_full: "View full",

    // Experience
    exp_title: "My Skills",
    exp_tech_hint: "Tap a technology to see my experience with it ↗",
    exp_diff_title: "Beyond Conventional Engineering",
    exp_diff_p1: "My professional profile transcends traditional engineering. As a Multimedia Engineer, I combine solid technical and algorithmic training with the multimodal versatility demanded by today's industry. This convergence allows me to lead projects across various technological frontiers: from high-impact user experience (UI/UX) design to the development of immersive technologies (Augmented Reality and Video Games).",
    exp_diff_p2: "Furthermore, my specialization in Artificial Intelligence enhances my ability to design, train, and deploy advanced models that solve complex problems, integrating them seamlessly into scalable and multidisciplinary IT ecosystems. My approach seeks not only functionality but also the creation of value through harmony between technique and user experience.",

    // Projects
    proj_title: "My Projects",
    proj_all: "All Projects",
    proj_web: "Web Development",
    proj_ra: "VR/AR/VG/3D",
    proj_ia: "Artificial Intelligence",
    proj_mobile: "Mobile Android Apps",
    proj_visit_site: "Visit Site",
    proj_visit_panel: "Visit Panel",
    proj_repo: "Repo",
    proj_backend: "Backend",
    proj_zoom: "Click to zoom",
    proj_loading: "Loading video...",
    proj_no_video: "Video not available",

    // Project Data
    p1_title: "Management App",
    p1_sub: "Household task management",
    p1_desc: "Android mobile application for collaborative household task management. Allows group members to create, assign, and track daily and weekly tasks, with administrator and moderator roles for status control. Includes notifications, authentication system, and real-time synchronization to keep all members coordinated.",

    p2_title: "Machinery Web",
    p2_sub: "Machinery Management Web",
    p2_desc: "Corporate website developed for a European industrial machinery management and rental company. Responsive and professional design with dynamic product catalog, online quoting system, and contact section. Optimized for SEO and performance, with a clean interface reflecting the company's brand identity.",

    p3_title: "Medical AI Web",
    p3_sub: "Computer Vision applied to medical imaging",
    p3_desc: "Computer vision web application focused on medical imaging analysis. The frontend is built with React and features a modern, intuitive design allowing users to upload three types of medical images (X-rays, CT scans, and MRIs). A deep learning model trained by me using YOLOv8 and PyTorch analyzes each image for pathological anomalies.",

    p4_title: "Studio Web",
    p4_sub: "Web design studio",
    p4_desc: "Complete web platform developed for a digital design studio. Includes a modern landing page with fluid animations, interactive portfolio gallery, and contact form. It also features an independent administration panel (ERP) for managing clients, projects, and billing, with secure authentication and PostgreSQL database.",

    p5_title: "Web Video Game",
    p5_sub: "Web video game developed in Unity",
    p5_desc: "3D video game developed in Unity and deployed on the web using WebGL. Includes character and environment modeling created in Blender, game mechanics programmed in C#, physics system, dynamic lighting, and particle effects. The gaming experience is integrated into a custom webpage with HTML, JavaScript, and CSS for immersive presentation directly from the browser.",

    // Project modal — extended details, stack roles & UI
    proj_about_title: "About the project",
    proj_stack_title: "Stack & decisions",
    proj_see_more: "See more",
    proj_see_less: "See less",

    p1_detail: "I built this as a native Android app to learn the full mobile lifecycle: persistent local storage, role-based permissions (admin / moderator / member) and notifications. The biggest challenge was keeping every member's task list in sync, which I solved with a real-time data layer and an authentication flow that scopes each household to its own group.",
    p2_detail: "A client-facing corporate site for a European machinery rental company. The priority was a fast, SEO-friendly experience on modest hosting, so I kept the stack deliberately lightweight (vanilla HTML/CSS/JS) and focused on a dynamic catalog, an online quoting flow and a clean information architecture that mirrors the company's brand.",
    p3_detail: "My most technical project: a computer-vision web app for medical imaging. I trained a YOLOv8 detection model in PyTorch on annotated X-ray, CT and MRI data, then served it behind a React frontend that lets clinicians upload an image and receive highlighted pathological regions. I chose React for the responsive UI and PyTorch + YOLO for the accuracy-to-speed balance the use case demanded.",
    p4_detail: "A two-part product: a public marketing site plus a private ERP panel for the studio to manage clients, projects and billing. I separated the front-of-house landing from the back-office tooling, secured the panel with authentication and used PostgreSQL for relational integrity across clients, projects and invoices.",
    p5_detail: "A 3D browser game shipped with Unity's WebGL target. Characters and environments were modeled in Blender, gameplay and physics scripted in C++/C#, and the build embedded in a custom HTML/JS/CSS page so it runs straight from the browser with no install. The goal was a fully immersive experience delivered through a normal web link.",

    role_html: "Semantic structure & markup",
    role_js: "Interactivity & app logic",
    role_css: "Styling, layout & responsiveness",
    role_react: "Component-based UI",
    role_python: "Model training & backend logic",
    role_yolo: "Real-time object detection model",
    role_pytorch: "Deep-learning training framework",
    role_postgresql: "Relational database",
    role_unity: "Game engine & WebGL build",
    role_blender: "3D modeling & assets",
    role_cpp: "Gameplay & performance logic",

    // Video
    video_title: "PORTFOLIO VIDEO",
    video_subtitle: "Press play to my creativity",

    // Footer
    footer_contact: "Let's talk",
    footer_cta: "Ready to build something together?",
    footer_crafted: "Crafted with",
    footer_by: "by",
    footer_location: "Cali - Colombia"
  },
  es: {
    // Nav
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_video: "Vídeo",
    nav_contact: "Contáctame",

    // Hero / Intro
    hero_title: "INGENIERO \n MULTIMEDIA",
    hero_subtitle: "MIGUEL ANGEL DIUZA M.",
    hero_desc: "Full-Stack Developer | Diseñador UI/UX | Machine Learning Engineer",

    // About Me
    about_title: "¿QUIÉN SOY?",
    about_text: "Soy un apasionado de la programación, el diseño y la tecnología, siempre en la búsqueda de nuevas formas de combinar creatividad y programación. Soy bachiller en Arte Gráfico, tecnólogo en Animación 3D e Ingeniero Multimedia de la UAO, especializándome en Inteligencia Artificial.",

    // Studies
    edu_title: "Educación",
    study_art_title: "Bachiller Técnico en Arte Gráfico",
    study_art_years: "2012 - 2018",
    study_art_desc: "Formación técnica integral enfocada en los fundamentos del diseño visual, técnicas de ilustración digital y procesos de pre-prensa. Especialización en la conceptualización creativa para medios impresos y digitales.",
    
    study_anim_title: "Tecnólogo en Animación 3D",
    study_anim_years: "2019 - 2021",
    study_anim_desc: "Capacitación avanzada en el pipeline completo de producción digital. Incluye modelado poligonal 3D, rigging avanzado, animación de personajes, iluminación cinemática y composición de efectos visuales (VFX) para producciones multimedia.",

    study_eng_title: "Ingeniería Multimedia",
    study_eng_years: "2021 - 2026",
    study_eng_badge: "graduación programada mayo 26",
    study_eng_desc: "Programa académico transdisciplinar que fusiona la ingeniería de software con el diseño de experiencias interactivas. Especialización en desarrollo de productos digitales, interfaces inmersivas, y gestión de proyectos tecnológicos multimedia.",

    study_ai_title: "Especialización en IA",
    study_ai_years: "Actualmente cursando",
    study_ai_badge: "1/2 semestres aprobados",
    study_ai_desc: "Estudios de posgrado de vanguardia orientados al análisis predictivo y automatización inteligente. Profundización en arquitecturas de redes neuronales, visión por computador, procesamiento de lenguaje natural y el despliegue de modelos de Machine Learning en entornos de producción.",

    study_extra_title: "Cursos Adicionales",
    study_extra_years: "2013 - Actualidad",
    study_extra_desc: "Trayectoria de formación continua y autodidacta a través de certificaciones internacionales en desarrollo web, backend, infraestructura en la nube y diseño estratégico. Un compromiso constante con la actualización técnica en un ecosistema digital en constante cambio.",
    study_no_pdf: "No hay previsualización disponible.",
    study_view_full: "Ver completo",

    // Experience
    exp_title: "Mis Habilidades",
    exp_tech_hint: "Toca una tecnología para ver mi experiencia con ella ↗",
    exp_diff_title: "Más allá de la Ingeniería Convencional",
    exp_diff_p1: "Mi perfil profesional trasciende la ingeniería tradicional. Como Ingeniero Multimedia, combino una sólida formación técnica y algorítmica con la versatilidad multimodal que exige la industria actual. Esta convergencia me permite liderar proyectos en diversas fronteras tecnológicas: desde el diseño de experiencias de usuario de alto impacto (UI/UX) y el desarrollo de tecnologías inmersivas (Realidad Aumentada y Videojuegos).",
    exp_diff_p2: "Además, mi especialización en Inteligencia Artificial potencia mi capacidad para diseñar, entrenar e implementar modelos avanzados que resuelven problemas complejos, integrándolos de manera armoniosa en ecosistemas informáticos escalables y multidisciplinarios. Mi enfoque no solo busca la funcionalidad, sino la creación de valor a través de la armonía entre la técnica y la experiencia del usuario.",

    // Projects
    proj_title: "Mis Proyectos",
    proj_all: "Todos los proyectos",
    proj_web: "Desarrollo Web",
    proj_ra: "VR/AR/VG/3D",
    proj_ia: "Inteligencia Artificial",
    proj_mobile: "Apps Mobile Android",
    proj_visit_site: "Ver Sitio",
    proj_visit_panel: "Ver Panel",
    proj_repo: "Repo",
    proj_backend: "Backend",
    proj_zoom: "Click para ampliar",
    proj_loading: "Cargando video...",
    proj_no_video: "Video no disponible",

    // Project Data
    p1_title: "App de gestión",
    p1_sub: "Gestión de tareas del hogar",
    p1_desc: "Aplicación móvil Android para la gestión colaborativa de tareas del hogar. Permite a los miembros de un grupo crear, asignar y dar seguimiento a tareas diarias y semanales, con roles de administrador y moderador para el control de estados. Incluye notificaciones, sistema de autenticación y sincronización en tiempo real para mantener a todos los integrantes coordinados.",

    p2_title: "Machinery Web",
    p2_sub: "Machinery Management Web",
    p2_desc: "Sitio web corporativo desarrollado para una empresa europea de gestión y alquiler de maquinaria industrial. Diseño responsive y profesional con catálogo de productos dinámico, sistema de cotizaciones en línea y sección de contacto. Optimizado para SEO y rendimiento, con una interfaz limpia que refleja la identidad de marca de la compañía.",

    p3_title: "Web AI Medica",
    p3_sub: "Visión por Computadora aplicada a imagenología médica",
    p3_desc: "Aplicación web de visión por computadora enfocada en el análisis de imagenología médica. El frontend está construido con React y presenta un diseño moderno e intuitivo que permite al usuario cargar tres tipos de imágenes médicas (radiografías, tomografías y resonancias). Un modelo de deep learning entrenado por mí con YOLOv8 y PyTorch analiza cada imagen en busca de anomalías patológicas.",

    p4_title: "Studio Web",
    p4_sub: "Studio de diseño web",
    p4_desc: "Plataforma web completa desarrollada para un estudio de diseño digital. Incluye una landing page moderna con animaciones fluidas, galería de portafolio interactiva y formulario de contacto. Además, cuenta con un panel de administración (ERP) independiente para la gestión de clientes, proyectos y facturación, con autenticación segura y base de datos PostgreSQL.",

    p5_title: "Video juego web",
    p5_sub: "Videojuego en web desarrollado en Unity",
    p5_desc: "Videojuego 3D desarrollado en Unity y desplegado en la web mediante WebGL. Incluye modelado de personajes y escenarios creados en Blender, mecánicas de juego programadas en C#, sistema de físicas, iluminación dinámica y efectos de partículas. La experiencia de juego se integra en una página web personalizada con HTML, JavaScript y CSS para una presentación inmersiva directamente desde el navegador.",

    // Modal de proyecto — detalles extendidos, roles del stack y UI
    proj_about_title: "Sobre el proyecto",
    proj_stack_title: "Stack y decisiones",
    proj_see_more: "Ver más",
    proj_see_less: "Ver menos",

    p1_detail: "La construí como app nativa de Android para dominar el ciclo completo en móvil: almacenamiento local persistente, permisos por rol (administrador / moderador / miembro) y notificaciones. El mayor reto fue mantener sincronizada la lista de tareas de cada integrante, que resolví con una capa de datos en tiempo real y un flujo de autenticación que aísla cada hogar en su propio grupo.",
    p2_detail: "Sitio corporativo para una empresa europea de alquiler de maquinaria. La prioridad era una experiencia rápida y orientada a SEO sobre hosting modesto, así que mantuve el stack deliberadamente ligero (HTML/CSS/JS puro) y me enfoqué en un catálogo dinámico, un flujo de cotización en línea y una arquitectura de información limpia y fiel a la marca.",
    p3_detail: "Mi proyecto más técnico: una app web de visión por computador para imagenología médica. Entrené un modelo de detección YOLOv8 en PyTorch sobre datos anotados de radiografías, tomografías y resonancias, y lo serví detrás de un frontend en React que permite subir una imagen y recibir las regiones patológicas resaltadas. Elegí React por la UI responsive y PyTorch + YOLO por el balance precisión-velocidad que exigía el caso de uso.",
    p4_detail: "Un producto en dos partes: un sitio público de marketing más un panel ERP privado para que el estudio gestione clientes, proyectos y facturación. Separé la landing de cara al público de las herramientas internas, protegí el panel con autenticación y usé PostgreSQL por la integridad relacional entre clientes, proyectos y facturas.",
    p5_detail: "Un videojuego 3D para navegador con el target WebGL de Unity. Modelé personajes y escenarios en Blender, programé la jugabilidad y la física en C++/C#, e incrusté el build en una página HTML/JS/CSS personalizada para que corra directo desde el navegador sin instalar nada. La meta era una experiencia totalmente inmersiva entregada por un simple enlace web.",

    role_html: "Estructura semántica y marcado",
    role_js: "Interactividad y lógica de app",
    role_css: "Estilos, maquetación y responsive",
    role_react: "Interfaz por componentes",
    role_python: "Entrenamiento del modelo y backend",
    role_yolo: "Modelo de detección en tiempo real",
    role_pytorch: "Framework de deep learning",
    role_postgresql: "Base de datos relacional",
    role_unity: "Motor de juego y build WebGL",
    role_blender: "Modelado 3D y assets",
    role_cpp: "Lógica de juego y rendimiento",

    // Video
    video_title: "VIDEO PORTAFOLIO",
    video_subtitle: "Dale play a mi creatividad",

    // Footer
    footer_contact: "Hablemos",
    footer_cta: "¿Construimos algo juntos?",
    footer_crafted: "Hecho con",
    footer_by: "por",
    footer_location: "Cali - Colombia"
  }
};

export type LanguageCode = 'en' | 'es';
export type TranslationKey = keyof typeof translations['en'];
