import { useEffect, useState } from "react"
import "./TechAvatar.css"

const logos = [
  "/CSS.png",
  "/HTML.png",
  "/JS.jpg",
  "/Node.png",
  "/Express.png",
  "/Mongo.png",
  "/React.png",
  "/Python.png",
]

const TechAvatar = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length)
    }, 2500) // 2.5s / logo

    return () => clearInterval(timer)
  }, [])

  return (
    <img
      key={logos[index]}
      src={logos[index]}
      alt="Tech Logo"
      className="tech-avatar-img"
    />
  )
}

export default TechAvatar
