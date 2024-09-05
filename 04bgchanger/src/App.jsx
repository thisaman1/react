import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-0" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <div className="px-1 py-0.5 rounded-md" style={{backgroundColor:color,color:"white"}}>Click any color</div>
          <button onClick={()=> (setColor("blue"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"blue", color:"white"}}>Blue</button>
          <button onClick={()=> (setColor("red"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"red", color:"white"}}>Red</button>
          <button onClick={()=> (setColor("green"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"green", color:"white"}}>Green</button>
          <button onClick={()=> (setColor("pink"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"pink", color:"white"}}>Pink</button>
          <button onClick={()=> (setColor("orange"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"orange", color:"white"}}>Orange</button>
          <button onClick={()=> (setColor("black"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"black", color:"white"}}>Black</button>
          <button onClick={()=> (setColor("yellow"))} className="outline-none px-2 py-0.5 rounded-lg shadow-md" style={{backgroundColor:"Yellow", color:"Black"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
