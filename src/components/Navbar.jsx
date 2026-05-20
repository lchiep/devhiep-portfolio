import "./Navbar.css"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { logout } from "../utils/logout"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const { lang, changeLanguage } = useContext(LanguageContext)
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem("token")

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <a href="#home">DevHiep</a>
      </div>

      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#timeline">Journey</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

        <li
          className="lang-btn"
          onClick={() => changeLanguage(lang === "vn" ? "en" : "vn")}
        >
          {lang.toUpperCase()}
        </li>

        {isLoggedIn ? (
          <>
            <img
              src="/user.png"
              alt="User"
              className="user-avatar"
              onClick={logout}
              title="Click to logout"
            />
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </ul>
    </nav>
  )
}

export default Navbar