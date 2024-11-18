import { useState } from "react"
import './App.css'


function App(){
  const [toggleText, setToggleText] = useState({
    title: "Change the header here!",
    paragraph: "Change the paragraph here!"
  })
  const [value, setValue] = useState(0)
  const [color, setColor] = useState(false)

  function handleChange(e){
    setToggleText(prevText => {
      const {name, value} = e.target
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  function increment(){
    setValue(prevValue => prevValue + 1)
  }

  function toggleColor(){
    setColor(prevColor => !prevColor)
  }

  return (
    <div className="body">
      <div className="container">
        <div className="text-container">
          <h1>{toggleText.title}</h1>
          <p>{toggleText.paragraph}</p>
        </div>

        <input
          type="text" 
          name="title" 
          id=""
          onChange={handleChange}
          value={toggleText.title}
        />
        <br />
        <input
          type="text" 
          name="paragraph" 
          id=""
          onChange={handleChange}
          value={toggleText.paragraph}
        />
        <br />
        <button type="button" onClick={increment}><b>Click to increment: {value}</b></button>
        <button className="box" onClick={toggleColor} style={{backgroundColor: color ? "black" : "white"}}></button>
        <p>You can toggle the color by clicking the box above</p>
      </div>
    </div>

  )
}

export default App