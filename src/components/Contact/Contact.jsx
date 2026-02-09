import { useState } from "react"
import { FaPaperPlane, FaTimes, FaEnvelope } from "react-icons/fa"
import "./Contact.css"

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
const API_URL = import.meta.env.VITE_API_URL

const Contact = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const [flyDir, setFlyDir] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("") // clear lỗi khi gõ lại
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1️⃣ Check empty
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields")
      return
    }

    // 2️⃣ Check gmail
    if (!GMAIL_REGEX.test(form.email)) {
      setError("Email must be a valid Gmail address (@gmail.com)")
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })


      if (res.ok) {
        const dirs = ["fly-up", "fly-left", "fly-right"]
        setFlyDir(dirs[Math.floor(Math.random() * dirs.length)])
        setSent(true)

        setTimeout(() => setShowSuccess(true), 900)

        setTimeout(() => {
          setSent(false)
          setShowSuccess(false)
          onClose()
        }, 2300)
      } else {
        setError("Send failed")
      }
    } catch {
      setError("Server error")
    }
  }

  return (
    <>
      {!sent && (
        <div className="contact-modal-overlay" onClick={onClose}>
          <div
            className="contact-modal pop-from-icon"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>

            <h2 className="contact-title">Contact Me</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                name="email"
                placeholder="Your Gmail"
                value={form.email}
                onChange={handleChange}
                className={error ? "input-error" : ""}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              />

              <button type="submit" className="send-btn">
                <FaPaperPlane /> Send
              </button>

              {error && <p className="error-text">{error}</p>}
            </form>
          </div>
        </div>
      )}

      {sent && (
        <div className={`envelope ${flyDir}`}>
          <FaEnvelope size={44} />
        </div>
      )}

      {showSuccess && (
        <div className="success-floating">
          <div className="success-check">✓</div>
          <h3>Congratulations!</h3>
          <p>Your message has been sent</p>
        </div>
      )}
    </>
  )
}

export default Contact
