import { useEffect, useState } from "react"
import "./Hero.css"

const codeSnippets = [
  `
<span class="kw">const</span> <span class="var">devHiep</span> <span class="op">=</span> {
  <span class="prop">role</span>: <span class="str">"Backend Developer Intern"</span>,
  <span class="prop">stack</span>: [<span class="str">"Node.js"</span>, <span class="str">"Express"</span>, <span class="str">"MongoDB"</span>],
  <span class="prop">focus</span>: <span class="str">"REST API & JWT Auth"</span>,
  <span class="prop">location</span>: <span class="str">"Vietnam"</span>,
}

<span class="kw">export default</span> <span class="var">devHiep</span>
`,

  `
<span class="kw">class</span> <span class="class">BackendDeveloper</span> {
  <span class="fn">constructor</span>() {
    <span class="kw">this</span>.<span class="prop">mindset</span> <span class="op">=</span> <span class="str">"Clean & scalable systems"</span>
  }

  <span class="fn">buildAPI</span>() {
    <span class="kw">return</span> <span class="str">"Fast, secure & maintainable"</span>
  }
}
`,

  `
<span class="kw">async function</span> <span class="fn">connectDatabase</span>() {
  <span class="kw">try</span> {
    <span class="kw">await</span> <span class="var">mongoose</span>.<span class="fn">connect</span>(<span class="str">MONGO_URI</span>)
    <span class="fn">console.log</span>(<span class="str">"MongoDB connected"</span>)
  } <span class="kw">catch</span> (err) {
    <span class="fn">console.error</span>(err)
  }
}
`
]

function CodePanel() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const current = codeSnippets[index]

    if (char < current.length) {
      const timeout = setTimeout(() => {
        setText(current.slice(0, char + 1))
        setChar(char + 1)
      }, 18)
      return () => clearTimeout(timeout)
    } else {
      const delay = setTimeout(() => {
        setChar(0)
        setText("")
        setIndex((prev) => (prev + 1) % codeSnippets.length)
      }, 1400)
      return () => clearTimeout(delay)
    }
  }, [char, index])

  return (
    <div className="code-wrapper">
      <div className="code-shadow" />
      <div className="code-back" />

      <div className="code-panel">
        <div className="code-header">
          <div className="code-dots">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </div>
          <span className="code-title"> DevHiep - Portfolio </span>
        </div>

        <pre
          className="code-body"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  )
}

export default CodePanel
