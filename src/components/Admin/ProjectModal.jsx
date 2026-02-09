import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const ProjectModal = ({
  isOpen,
  onClose,
  onSubmit,
  editingProject,
  loading
}) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: ""
  })

  const [imageFile, setImageFile] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!isOpen) return

    if (!editingProject) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({ title: "", description: "", category: "" })
      setPreview(null)
      setImageFile(null)
      return
    }

    setForm({
      title: editingProject.title || "",
      description: editingProject.description || "",
      category: editingProject.category || ""
    })

    // ✅ QUAN TRỌNG: KHÔNG GHÉP /uploads LẦN 2
    setPreview(
      editingProject.image
        ? `${API_URL}${editingProject.image}`
        : null
    )
  }, [editingProject, isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)

    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(form).forEach(([k, v]) =>
      formData.append(k, v)
    )

    if (imageFile) {
      formData.append("image", imageFile)
    }

    onSubmit(formData)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{editingProject ? "Edit Project" : "Add Project"}</h3>

        <form onSubmit={handleSubmit}>
          <input name="title" value={form.title} onChange={handleChange} required />
          <input name="category" value={form.category} onChange={handleChange} required />
          <textarea name="description" value={form.description} onChange={handleChange} required />

          <input type="file" accept="image/*" onChange={handleImageChange} />

          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{ width: "100%", height: 160, objectFit: "cover", marginTop: 10 }}
            />
          )}

          <div style={{ marginTop: 12 }}>
            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : editingProject ? "Update" : "Create"}
            </button>
            <button type="button" onClick={onClose} disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectModal
