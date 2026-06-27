import { asset } from "@/lib/utils";
import type { TranslationKey, LanguageCode } from "./translations";

/** Tecnología con su logo y una clave i18n que describe su rol/uso. */
export interface TechMeta {
  name: string;
  logo: string;
  roleKey: TranslationKey;
}

/** Registro único de tecnologías (DRY: se referencian por clave). */
export const TECHS: Record<string, TechMeta> = {
  html: { name: "HTML", logo: asset("loogos/html.svg"), roleKey: "role_html" },
  js: { name: "JavaScript", logo: asset("loogos/Javascript.svg"), roleKey: "role_js" },
  css: { name: "CSS", logo: asset("loogos/css.svg"), roleKey: "role_css" },
  react: { name: "React", logo: asset("loogos/react.svg"), roleKey: "role_react" },
  python: { name: "Python", logo: asset("loogos/python.svg"), roleKey: "role_python" },
  yolo: { name: "YOLOv8", logo: asset("loogos/yolo.svg"), roleKey: "role_yolo" },
  pytorch: { name: "PyTorch", logo: asset("loogos/pytorch.svg"), roleKey: "role_pytorch" },
  postgresql: { name: "PostgreSQL", logo: asset("loogos/postgresql.svg"), roleKey: "role_postgresql" },
  unity: { name: "Unity", logo: asset("loogos/unity.png"), roleKey: "role_unity" },
  blender: { name: "Blender", logo: asset("loogos/blender.svg"), roleKey: "role_blender" },
  cpp: { name: "C++", logo: asset("loogos/c++.svg"), roleKey: "role_cpp" },
};

export type ProjectLinkType = "site" | "panel" | "repo" | "backend";

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
}

/** Grupo de "habilidades usadas" dentro de un proyecto (disciplina + techs + nota). */
export interface ProjectGroup {
  label: Record<LanguageCode, string>;
  techs: string[];
  note: Record<LanguageCode, string>;
}

export interface Project {
  id: number;
  category: string;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  /** Descripción corta (siempre visible). */
  descKey: TranslationKey;
  /** Descripción extendida (se revela con "Ver más"). */
  detailKey: TranslationKey;
  image: string;
  images: string[];
  video?: string;
  /** Claves dentro de TECHS. */
  techs: string[];
  /** Desglose de habilidades/disciplinas usadas (sección "Ver más"). */
  groups: ProjectGroup[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "Mobile",
    titleKey: "p1_title",
    subtitleKey: "p1_sub",
    descKey: "p1_desc",
    detailKey: "p1_detail",
    image: asset("img/app.jpg"),
    images: [asset("img/app2.jpg")],
    video: asset("img/Bg3.mp4"),
    techs: ["html", "js", "css"],
    groups: [
      {
        label: { es: "Maquetación & UI", en: "Layout & UI" },
        techs: ["html", "css"],
        note: {
          es: "Estructuré las vistas de la app y las estilicé para una experiencia clara en móvil, con estados para tareas y roles.",
          en: "Structured the app views and styled them for a clean mobile experience, with states for tasks and roles.",
        },
      },
      {
        label: { es: "Lógica & datos", en: "Logic & data" },
        techs: ["js"],
        note: {
          es: "Implementé la lógica de creación/asignación de tareas, permisos por rol (admin/moderador) y la sincronización en tiempo real.",
          en: "Built task create/assign logic, role-based permissions (admin/moderator) and real-time sync.",
        },
      },
    ],
    links: [{ type: "repo", href: "https://github.com/MiguelDiuza/AppAndroid" }],
  },
  {
    id: 2,
    category: "Web",
    titleKey: "p2_title",
    subtitleKey: "p2_sub",
    descKey: "p2_desc",
    detailKey: "p2_detail",
    image: asset("img/im1.png"),
    images: [asset("img/im1.png")],
    video: asset("img/vip.mp4"),
    techs: ["html", "js", "css"],
    groups: [
      {
        label: { es: "Frontend", en: "Frontend" },
        techs: ["html", "css", "js"],
        note: {
          es: "Sitio corporativo responsive con HTML semántico, estilos cuidados y un catálogo dinámico con JavaScript vanilla. Optimizado para SEO y rendimiento sobre hosting modesto.",
          en: "Responsive corporate site with semantic HTML, careful styling and a dynamic catalog in vanilla JavaScript. Optimized for SEO and performance on modest hosting.",
        },
      },
    ],
    links: [
      { type: "site", href: "https://www.vipwelleurope.es" },
      { type: "repo", href: "https://github.com/MiguelDiuza/VipWell" },
    ],
  },
  {
    id: 3,
    category: "IA, Web",
    titleKey: "p3_title",
    subtitleKey: "p3_sub",
    descKey: "p3_desc",
    detailKey: "p3_detail",
    image: asset("img/MedicalAI.png"),
    images: [asset("img/MedicalAI.png")],
    video: asset("img/Visumed.mp4"),
    techs: ["react", "html", "js", "css", "python", "yolo", "pytorch"],
    groups: [
      {
        label: { es: "Frontend", en: "Frontend" },
        techs: ["react", "css", "js"],
        note: {
          es: "Interfaz en React (Vite) con diseño moderno y responsive: permite subir radiografías, tomografías y resonancias y muestra los resultados del análisis.",
          en: "React (Vite) interface with a modern, responsive design: lets users upload X-rays, CT and MRI scans and shows the analysis results.",
        },
      },
      {
        label: { es: "IA & Visión por computador", en: "AI & Computer Vision" },
        techs: ["python", "pytorch", "yolo"],
        note: {
          es: "Entrené un detector YOLOv8 en PyTorch sobre datos médicos anotados para localizar anomalías patológicas en cada imagen.",
          en: "Trained a YOLOv8 detector in PyTorch on annotated medical data to locate pathological anomalies in each image.",
        },
      },
    ],
    links: [
      { type: "site", href: "https://ia-patologia.vercel.app/" },
      { type: "repo", href: "https://github.com/MiguelDiuza/IA_Patologia" },
    ],
  },
  {
    id: 4,
    category: "Web",
    titleKey: "p4_title",
    subtitleKey: "p4_sub",
    descKey: "p4_desc",
    detailKey: "p4_detail",
    image: asset("img/mot.png"),
    images: [asset("img/mot.png")],
    video: asset("img/Motion.mp4"),
    techs: ["html", "js", "css", "postgresql"],
    groups: [
      {
        label: { es: "Frontend & animación", en: "Frontend & animation" },
        techs: ["html", "css", "js"],
        note: {
          es: "Landing del estudio creativo con Bootstrap 5, animaciones al hacer scroll (AOS), carruseles (Owl Carousel) y galería con lightbox; estilos organizados con SCSS y maquetación mobile-first.",
          en: "Creative-studio landing with Bootstrap 5, scroll animations (AOS), sliders (Owl Carousel) and a lightbox gallery; styles organized with SCSS and a mobile-first layout.",
        },
      },
      {
        label: { es: "Backend & datos (ERP)", en: "Backend & data (ERP)" },
        techs: ["postgresql"],
        note: {
          es: "Panel de administración independiente con autenticación segura y PostgreSQL para gestionar clientes, proyectos y facturación.",
          en: "Standalone admin panel with secure authentication and PostgreSQL to manage clients, projects and billing.",
        },
      },
    ],
    links: [
      { type: "site", href: "https://motiondreamstudio.com/" },
      { type: "panel", href: "https://motion-dreams-erp.vercel.app/" },
      { type: "repo", href: "https://github.com/MiguelDiuza/MotionDreamStudio" },
      { type: "backend", href: "https://github.com/MiguelDiuza/motionDreamsERP" },
    ],
  },
  {
    id: 5,
    category: "RA",
    titleKey: "p5_title",
    subtitleKey: "p5_sub",
    descKey: "p5_desc",
    detailKey: "p5_detail",
    image: asset("img/som.png"),
    images: [asset("img/sombra.png")],
    video: asset("img/G.mp4"),
    techs: ["unity", "blender", "cpp", "html", "js", "css"],
    groups: [
      {
        label: { es: "Motor & juego", en: "Engine & gameplay" },
        techs: ["unity"],
        note: {
          es: "Mecánicas, físicas, iluminación dinámica y shaders programados en C# y HLSL/ShaderLab dentro de Unity (el 92% del código es C#), con build desplegado en la web mediante WebGL.",
          en: "Mechanics, physics, dynamic lighting and shaders written in C# and HLSL/ShaderLab inside Unity (92% of the code is C#), with a build deployed to the web via WebGL.",
        },
      },
      {
        label: { es: "Arte 3D", en: "3D Art" },
        techs: ["blender"],
        note: {
          es: "Modelado, texturizado y animación de personajes y escenarios creados en Blender.",
          en: "Modeling, texturing and animation of characters and environments created in Blender.",
        },
      },
      {
        label: { es: "Integración web", en: "Web integration" },
        techs: ["html", "css", "js"],
        note: {
          es: "Página personalizada que embebe el build WebGL para una presentación inmersiva desde el navegador.",
          en: "Custom page embedding the WebGL build for an immersive presentation from the browser.",
        },
      },
    ],
    links: [{ type: "repo", href: "https://github.com/MiguelDiuza/SombraFur" }],
  },
];
