import { useState } from "react"
import { LanguageContext } from "./LanguageContext"

export const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "vn"
  )

  const changeLanguage = (value) => {
    setLang(value)
    localStorage.setItem("lang", value)
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
