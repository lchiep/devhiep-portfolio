import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./index.css"
import "./styles/global.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { LanguageProvider } from "./context/LanguageProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </LanguageProvider>
  </React.StrictMode>
)
