import { useCallback, useState, useEffect, useRef} from "react"


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState()
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)str+="0123456789"
    if(characterAllowed)str+="@#$%&*"

    for(let i=1;i<=length;i++){
      let char = str.charAt(Math.floor(Math.random()*str.length))
      pass+=char;
    }

    setPassword(pass)
  },[length,numberAllowed,characterAllowed]);

  const copyTextToClipboard = useCallback( ()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password]);

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed]);

  return (
    <div className='w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-10 bg-gray-300'>
      <h1 className='text-center my-3 text-2xl pt-2'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyTextToClipboard}
        className='bg-green-500 p-3 rounded text-white text-center'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App