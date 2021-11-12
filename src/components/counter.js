import { useState } from "react"

function Counter() {
  //let numbet=0
  const [number, setNumber] = useState(0)
  const [massage, setMessage] = useState("")

  const increment = () => {
    //console.log("increment")
    //setNumber(number + 1)
    //setMessage("")
    //console.log("number:", number)
    if (number < 10) {
      setNumber(number + 1)
      setMessage("enagh")
      setMessage("")
    }
  }

  const decrment = () => {
    // console.log("decrment")
    // setNumber(number - 1)
    // console.log("number:", number)

    if (number > 0) {
      setNumber(number - 1)
    } else {
      setMessage("stop")
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrment}>Decrement</button>
      <div>{massage}</div>
    </>
  )
}

export default Counter
