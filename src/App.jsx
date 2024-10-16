import { useState, useEffect } from 'react'
import './App.css'
import Certificate from './Cetificate'
import Login from './Login'

function App() {
  const [isInput, setIsinput] = useState(true)
  const [participants, setAllparticipants] = useState({})


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch (
        "https://api.sheetbest.com/sheets/7d1ef6fc-ae34-4337-a02f-b68bc6def638"
      )

      const data = await res.json()
      setAllparticipants(data)

    } catch(error) {
      console.log("error", error)
    }
  }

  console.log("localStorage", localStorage.getItem("userHasHistory"))

  return (
    <>
      {document.referrer == "https://www.philsan.org/" ? (
        localStorage.getItem("userHasHistory") ? 
          <Login /> :
          <Certificate 
            data={participants}
          /> 
        ) : <Login />
      }
    </>
  )
}

export default App
