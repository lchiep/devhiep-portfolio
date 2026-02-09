import "./About.css"
import { FaDownload } from "react-icons/fa"
import { useContext } from "react"
import TechAvatar from "../TechAvatar"

import { LanguageContext } from "../../context/LanguageContext"
import vn from "../../i18n/vn.json"
import en from "../../i18n/en.json"

const About = () => {
  const { lang } = useContext(LanguageContext)
  const t = lang === "vn" ? vn : en

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <div className="about-avatar">
            <TechAvatar />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <h4 className="about-sub">👋 {t.aboutSub}</h4>

          <h2 className="about-title">
            {t.aboutName}
            <span>{t.aboutRole}</span>
          </h2>

          <p className="about-desc">{t.aboutDesc}</p>

          <ul className="about-list">
            <li>🚀 {t.aboutItem1}</li>
            <li>⚙️ {t.aboutItem2}</li>
            <li>📚 {t.aboutItem3}</li>
          </ul>

          <div className="about-actions">
            <a href="#" className="btn-outline">
              <FaDownload /> {t.downloadCV}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
