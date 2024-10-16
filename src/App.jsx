import { useState, useEffect } from 'react'
import './App.css'
import Certificate from './Cetificate'
import Login from './Login'

function App() {
  const [isInput, setIsinput] = useState(true)
  const [participants, setAllparticipants] = useState({})


  useEffect(() => {
    getData()
    console.log("localStorgae", localStorage.getItem("userHasHistory") == "true")
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

  return (
    <>
      {document.referrer == "https://www.philsan.org/" || localStorage.getItem("userHasHistory") !== "true" ? 
        <Certificate 
          data={participants}
        /> :
        <Login />
      }
    </>
  )
}

export default App
