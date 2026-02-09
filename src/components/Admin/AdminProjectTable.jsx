const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const AdminProjectTable = ({ projects, onEdit, onDelete }) => {
  if (!projects?.length) return <p>No projects found.</p>

  return (
    <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {projects.map(p => (
          <tr key={p.id}>
            <td>
              {p.image && (
                <img
                  src={`${API_URL}${p.image}`}
                  width="80"
                  style={{ borderRadius: 6 }}
                />
              )}
            </td>
            <td>{p.title}</td>
            <td>{p.category}</td>
            <td>{p.description}</td>
            <td>
              <button onClick={() => onEdit(p)}>Edit</button>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AdminProjectTable
