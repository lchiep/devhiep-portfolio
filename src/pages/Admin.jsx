import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import AdminTable from "../components/AdminTable"
import LoadingSpinner from "../components/ui/LoadingSpinner"

import api from "../utils/api"
import { isTokenValid } from "../utils/auth"
import { logout } from "../utils/logout"

const Admin = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  // ========================
  // FETCH CONTACTS
  // ========================
  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true)

      const res = await api.get("/contact")
      setContacts(res.data || [])

    } catch (err) {
      console.error(err)
      toast.error("Load contacts failed")
    } finally {
      setLoading(false)
    }
  }, []) // ❗ KHÔNG đưa toast vào dependency

  // ========================
  // PROTECT ADMIN
  // ========================
  useEffect(() => {
    if (!isTokenValid()) {
      localStorage.removeItem("token")
      navigate("/login")
      return
    }

    fetchContacts()
  }, [fetchContacts, navigate])

  // ========================
  // DELETE CONTACT
  // ========================
  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact?")) return

    try {
      await api.delete(`/contact/${id}`)

      toast.success("Deleted successfully")
      fetchContacts()

    } catch (err) {
      console.error(err)
      toast.error("Delete failed")
    }
  }

  // ========================
  return (
    <div style={{ padding: "50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Admin Dashboard</h2>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      {loading ? (
        <div style={{ marginTop: 40 }}>
          <LoadingSpinner size={32} />
        </div>
      ) : (
        <AdminTable
          contacts={contacts}
          onDelete={deleteContact}
        />
      )}
    </div>
  )
}

export default Admin
