import { useState ,useEffect} from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from "axios"
import  Markdown from "react-markdown"
function App() {
  const [count, setCount] = useState(0)
  const [code,setcode]=useState(`
function sum (){
return 1+1;
}
          `)
          const [RevieW,setReview]=useState(``)
useEffect(()=>{
  prism.highlightAll()
},[])

 async function review(){
const responce=await axios.post('http://localhost:7000/api/v1/ai/responce',{code})
setReview(responce.data)
// console.log(responce.data)
}
  return (
    <>
 <main>
  <div className="scrollable-section">
    {/* Left: Code Editor */}
    <div className="left">
      <div className="code">
        <Editor
          value={code}
          onValueChange={code => setcode(code)}
          highlight={code =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: "5px",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>

    {/* Right: Review Panel */}
    <div className="right"><Markdown>{RevieW}</Markdown></div>
  </div>

  {/* Review Button */}
  <div className="review" onClick={review}>
    Review
  </div>
</main>
    </>
  )
}



export default App
