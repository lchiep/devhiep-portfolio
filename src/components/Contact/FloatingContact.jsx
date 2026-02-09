import { useState } from "react"
import { FaComments } from "react-icons/fa"
import Contact from "./Contact"
import "./FloatingContact.css"

const FloatingContact = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="floating-contact-btn"
        onClick={() => setOpen(true)}
      >
        <FaComments size={26} />
      </div>

      {open && (
        <Contact onClose={() => setOpen(false)} />
      )}
    </>
  )
}

export default FloatingContact
