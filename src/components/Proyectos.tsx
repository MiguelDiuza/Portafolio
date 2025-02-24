import React from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

const Proyectos: React.FC = () => {
  // Aquí es donde se pueden agregar los proyectos
  const projects: Project[] = [
    { id: 1, name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { id: 2, name: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    { id: 3, name: 'Proyecto 3', description: 'Descripción del proyecto 3' },
  ];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
