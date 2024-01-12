import React,{useRef,useEffect,useState} from 'react'

const Test = () => {
    const focusInput = useRef()
    const [name, setName] = useState("")

    const handleSub =()=>{
        // console.log(focusInput.current)
        focusInput.current.focus()
    }

    useEffect(()=>{
        focusInput.current = name
    },[name])
  return (
    <div>
      <input ref={focusInput} type="text" value={name} name="name" class="form-control" onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button type='button' class="btn btn-primary" onClick={handleSub}>Click</button>
      my name use to be {focusInput.current} but it is {name}
    </div>
  )
}

export default Test
