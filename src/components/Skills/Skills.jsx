import skills from "../../data/skills.json"
import "./Skills.css"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import vn from "../../i18n/vn.json"
import en from "../../i18n/en.json"

// Lucide icons
import {
  Server,
  Database,
  Globe,
  Code,
  Cpu
} from "lucide-react"

const iconMap = {
  "Node.js": Server,
  "Express.js": Cpu,
  "MongoDB": Database,
  "REST API": Globe,
  "JavaScript": Code
}

const Skills = () => {
  const { lang } = useContext(LanguageContext)
  const t = lang === "vn" ? vn : en

  return (
    <section className="skills-section" id="skills">
      {/* TITLE */}
      <div className="skills-title-wrapper">
        <span className="skills-icon">💡</span>
        <h2 className="skills-title">{t.skillsTitle || "Skills"}</h2>
        <span className="skills-icon">💡</span>
      </div>

      {/* GRID */}
      <div className="skills-grid">
        {skills.map(skill => {
          const Icon = iconMap[skill.name]

          return (
            <div key={skill.id} className="skill-card">
              <div className="skill-glow" />

              {Icon && (
                <div className="skill-icon">
                  <Icon size={28} />
                </div>
              )}

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
