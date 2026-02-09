import { useEffect, useState, useContext } from "react"
import api from "../../api/axios"
import ProjectCard from "../ProjectCard"
import ProjectModal from "../ProjectModal"
import "./Projects.css"

import { LanguageContext } from "../../context/LanguageContext"
import vn from "../../i18n/vn.json"
import en from "../../i18n/en.json"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  const { lang } = useContext(LanguageContext)
  const t = lang === "vn" ? vn : en

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects")
        setProjects(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="projects-section" id="projects">

      {/* TITLE */}
      <div className="projects-title-wrapper">
        <span className="projects-icon">🚀</span>
        <h2 className="projects-title">
          {t.projectsTitle || "Projects"}
        </h2>
        <span className="projects-icon">🚀</span>
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  )
}

export default Projects
