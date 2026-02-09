import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // =========================
  // AUTO REDIRECT IF LOGGED
  // =========================

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      navigate("/admin")
    }
  }, [navigate])

  // =========================
  // HANDLE LOGIN
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      setError("Please enter username and password")
      return
    }

    try {
      setLoading(true)
      setError("")

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })

      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.msg || "Login failed")
        setLoading(false)
        return
      }

      // SAVE TOKEN
      localStorage.setItem("token", data.token)

      // REDIRECT ADMIN
      navigate("/admin", { replace: true })

    } catch (err) {
      console.error(err)
      setError("Server error")
    } finally {
      setLoading(false)
    }
  }

  // =========================

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Login</h2>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Username"
          value={username}
          onChange={e => {
            setUsername(e.target.value)
            setError("")
          }}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            setError("")
          }}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  )
}

export default Login
