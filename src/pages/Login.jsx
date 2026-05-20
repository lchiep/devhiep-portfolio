import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

const API_URL = import.meta.env.VITE_API_URL

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // =========================
  // MOUNT ANIMATION
  // =========================
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  // =========================
  // AUTO REDIRECT IF LOGGED
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) navigate("/admin")
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

      // ✅ FIX: dùng VITE_API_URL thay vì hardcode localhost
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.msg || "Login failed")
        setLoading(false)
        return
      }

      localStorage.setItem("token", data.token)
      navigate("/admin", { replace: true })
    } catch (err) {
      console.error(err)
      setError("Cannot connect to server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // =========================

  return (
    <div className={`login-root ${mounted ? "mounted" : ""}`}>
      {/* Background grid */}
      <div className="login-bg">
        <div className="login-grid" />
        <div className="login-glow glow-1" />
        <div className="login-glow glow-2" />
      </div>

      {/* Card */}
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <h1 className="login-title">Admin Portal</h1>
          <p className="login-subtitle">Restricted access — authenticate to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className={`field-group ${username ? "has-value" : ""}`}>
            <label className="field-label">Username</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                className="field-input"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={e => { setUsername(e.target.value); setError("") }}
                autoComplete="username"
              />
            </div>
          </div>

          <div className={`field-group ${password ? "has-value" : ""}`}>
            <label className="field-label">Password</label>
            <div className="field-wrap">
              <span className="field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input
                className="field-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError("") }}
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && (
            <div className="login-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            className={`login-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" />
                Authenticating...
              </>
            ) : (
              <>
                Sign In
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>
        </form>

        <p className="login-footer">DevHiep Portfolio © {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Login
