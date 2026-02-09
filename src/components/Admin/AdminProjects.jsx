import { useEffect, useState, useCallback } from "react"
import { toast } from "react-toastify"
import api from "../../utils/api"

import ProjectModal from "./ProjectModal"
import AdminProjectTable from "./AdminProjectTable"

const AdminProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  const fetchProjects = useCallback(async () => {
    try {
      const res = await api.get("/projects")
      setProjects(res.data)
    } catch {
      toast.error("Load projects failed")
    }
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const handleSubmit = async (formData) => {
    setLoading(true)
    try {
      if (editingProject) {
        await api.put(`/projects/${editingProject.id}`, formData)
        toast.success("Updated successfully")
      } else {
        await api.post("/projects", formData)
        toast.success("Added successfully")
      }

      await fetchProjects()
      closeModal()
    } catch {
      toast.error("Save failed")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return
    try {
      await api.delete(`/projects/${id}`)
      setProjects(prev => prev.filter(p => p.id !== id))
      toast.success("Deleted successfully")
    } catch {
      toast.error("Delete failed")
    }
  }

  const openAddModal = () => {
    setEditingProject(null)
    setOpenModal(true)
  }

  const openEditModal = (project) => {
    setEditingProject(project)
    setOpenModal(true)
  }

  const closeModal = () => {
    setEditingProject(null)
    setOpenModal(false)
  }

  return (
    <div>
      <button onClick={openAddModal}>+ Add Project</button>

      <AdminProjectTable
        projects={projects}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      <ProjectModal
        isOpen={openModal}
        onClose={closeModal}
        onSubmit={handleSubmit}
        editingProject={editingProject}
        loading={loading}
      />
    </div>
  )
}

export default AdminProjects
