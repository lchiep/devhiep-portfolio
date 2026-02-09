import "./Navbar.css"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { logout } from "../utils/logout"

function Navbar() {
  const { lang, changeLanguage } = useContext(LanguageContext)

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <a href="#home">DevHiep</a>
      </div>

      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#timeline">Journey</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li
          className="lang-btn"
          onClick={() => changeLanguage(lang === "vn" ? "en" : "vn")}
        >
          {lang.toUpperCase()}
        </li>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </ul>
    </nav>
  )
}

export default Navbar
