import { useState } from "react"

const AdminTable = ({ contacts, onDelete }) => {
  const [deletingId, setDeletingId] = useState(null)

  // ========================
  // EMPTY STATE
  // ========================
  if (!contacts || contacts.length === 0) {
    return <h3 style={{ marginTop: "20px" }}>No contacts found.</h3>
  }

  // ========================
  // RENDER TABLE
  // ========================
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ marginTop: "20px", width: "100%" }}
    >
      <thead>
        <tr>
          <th width="20%">Name</th>
          <th width="25%">Email</th>
          <th>Message</th>
          <th width="15%">Action</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
            <td>
              <button
                disabled={deletingId === item.id}
                onClick={async () => {
                  try {
                    setDeletingId(item.id)
                    await onDelete(item.id)
                  } finally {
                    setDeletingId(null)
                  }
                }}
                style={{
                  background: deletingId === item.id ? "#ccc" : "#e74c3c",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  cursor: deletingId === item.id ? "not-allowed" : "pointer"
                }}
              >
                {deletingId === item.id ? "Deleting..." : "Delete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AdminTable
