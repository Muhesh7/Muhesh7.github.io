import React from 'react';
import DrawerTechs from '../components/Drawer/DrawerTechs';
import ProjectCard from '../components/Project/ProjectCard';
import { projects } from '../constants/projects';
import SectionHoc from '../hocs/SectionHoc';

const Project = () => {
  const ProjectSection = SectionHoc(ProjectCard);
  return (
    <ProjectSection
      title="Projects"
      stackComponent={DrawerTechs}
      contents={projects}
    />
  );
};

export default Project;
