import axios from "axios"
import { useEffect, useState } from "react"
import PersonStat from "./components/PersonStat"

function App() {
  const [parson, setParson] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(response => {
      setParson(response.data.data)
    })
  }, [])

  console.log(setParson)
  return (
    <>
      <PersonStat parson={parson} />
    </>
  )
}

export default App
