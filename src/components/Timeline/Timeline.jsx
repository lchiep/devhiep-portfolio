import "./Timeline.css"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

import vn from "../../i18n/vn.json"
import en from "../../i18n/en.json"

function Timeline() {
  const { lang } = useContext(LanguageContext)
  const t = lang === "vn" ? vn : en

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">
        🚀 My Journey
        <span>{t.timelineTitle}</span>
      </h2>

      <div className="timeline">
        {t.timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
