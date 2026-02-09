import "./ProjectCard.css"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>

      <div className="project-glow" />

      {project.image && (
        <div className="project-image-wrapper">
          <img
            src={`${API_URL}/uploads/${project.image}`}
            alt={project.title}
            className="project-image"
          />
        </div>
      )}

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">
          {project.description}
        </p>

        {project.category && (
          <span className="project-category">
            {project.category}
          </span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
