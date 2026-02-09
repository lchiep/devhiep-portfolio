import vn from "../i18n/vn.json"
import en from "../i18n/en.json"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import CodePanel from "./CodePanel"
import "./Hero.css"

function Hero() {
  const { lang } = useContext(LanguageContext)
  const t = lang === "vn" ? vn : en

  return (
    <section className="hero container" id="home">
      <div className="hero-left">
        <h1 className="hero-title">
          Tôi là <span>DevHiep</span>
          <br />
          {t.heroTitle}
        </h1>

        <p className="hero-desc">{t.heroDesc}</p>
      </div>

      <div className="hero-right">
        <CodePanel />
      </div>

      <div className="hero-glow" />
    </section>
  )
}

export default Hero
