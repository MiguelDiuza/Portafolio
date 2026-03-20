const base = import.meta.env.BASE_URL || "/";
const getLogo = (name: string) => `${base}loogos/${name}`;

export const skillsData = [
  {
    name: "Frontend",
    percentage: 70,
    techs: [
      { src: getLogo("react.svg"), alt: "React" },
      { src: getLogo("html5.svg"), alt: "HTML5" },
      { src: getLogo("css3.svg"), alt: "CSS3" },
      { src: getLogo("js.png"), alt: "JS" }
    ]
  },
  {
    name: "Backend",
    percentage: 58,
    techs: [
      { src: getLogo("python.svg"), alt: "Python" },
      { src: getLogo("nodejs.webp"), alt: "NodeJS" },
      { src: getLogo("api.svg"), alt: "APIs" },
      { src: getLogo("mysql.svg"), alt: "MySQL" },
      { src: getLogo("java.svg"), alt: "Java" },
      { src: getLogo("postgresql.svg"), alt: "Postgre" }
    ]
  },
  {
    name: "UI/UX",
    percentage: 70,
    techs: [
      { src: getLogo("photo.svg"), alt: "photoshop" },
      { src: getLogo("figma.svg"), alt: "Figma" },
      { src: getLogo("sk.png"), alt: "sk" },
      { src: getLogo("ilus.svg"), alt: "ilustrator" }
    ]
  },
  {
    name: "3D/AR/VR",
    percentage: 65,
    techs: [
      { src: getLogo("blender.svg"), alt: "Blender" },
      { src: getLogo("unity.png"), alt: "Unity" },
      { src: getLogo("unr.png"), alt: "Unreal" },
      { src: getLogo("maya.png"), alt: "Maya" }
    ]
  },
  {
    name: "AI",
    percentage: 55,
    techs: [
      { src: getLogo("python.svg"), alt: "Reg Log" },
      { src: getLogo("pytorch.svg"), alt: "PyTorch" },
      { src: getLogo("sc.svg"), alt: "Scikit" },
      { src: getLogo("robo.png"), alt: "roboflow" },
      { src: getLogo("yolo.svg"), alt: "YOLO" },
      { src: getLogo("n8n.png"), alt: "N8N" }
    ]
  },
];
