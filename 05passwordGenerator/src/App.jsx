import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if(numberAllowed) string+="0123654789";
    if(charAllowed) string+="!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed,charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-10 text-orange-500 bg-gray-600'>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full my-3 py-1 px-5 rounded-lg' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-5 py-1 my-3 rounded-lg mx-5 shrink-0' onClick={copyPassToClipboard} >Copy</button>
        </div>

        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='curser-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mx-2.5'>
            <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' onChange={()=>{setnumberAllowed((prev)=>!prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked = {charAllowed} id='charInput' onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;


//useCallbacks memorize the functions......in dependencies we did not give password becausse the password will change every time the generator is run and because it is in a dependency the  useCallback will run again and again and it will go to infinite loop