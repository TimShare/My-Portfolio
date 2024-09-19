import Project from "../Components/Project/Project";
import { projects } from "../Helpers/ProjectList";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  skills={project.skills}
                  img={project.img}
                  imgBig={project.imgBig}
                  gitHubLink={project.gitHubLink}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
