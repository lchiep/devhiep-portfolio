import "./ProjectModal.css"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {project.image && (
          <img
            src={`${API_URL}/uploads/${project.image}`}
            alt={project.title}
            className="modal-image"
          />
        )}

        <h2 className="modal-title">{project.title}</h2>

        <p className="modal-desc">{project.description}</p>

        {project.stack && (
          <div className="modal-stack">
            {project.stack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        )}

        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank">GitHub</a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank">Live Demo</a>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProjectModal
