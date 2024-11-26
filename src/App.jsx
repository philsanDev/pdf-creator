import { useState, useEffect } from 'react'
import './App.css'
import Certificate from './Cetificate'
import FreeAccessCert from './FreeAccessCert'
import Login from './Login'

function App() {
  const [isInput, setIsinput] = useState(true)
  const [participants, setAllparticipants] = useState(null)


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch (
        "https://script.google.com/macros/s/AKfycbz8l1R3IV--rdBmvAyThKTRv2nJsJoGhy5SXuNM3qEl6H8wL4qQ0cDkAgiPEgd74s2rYA/exec"
      )

      const data = await res.json()
      setAllparticipants(data)

    } catch(error) {
      console.log("error", error)
    }
  }

  return (
    <>
      {/* {document.referrer == "https://www.philsan.org/" ? (
        localStorage.getItem("userHasHistory") ? 
          <Login /> :
          <Certificate 
            data={participants}
          /> 
        ) : <Login />
      } */}
       {/* <Certificate 
          data={participants}
        />  */}
         <FreeAccessCert
            data={participants}
        /> 
    </>
  )
}

export default App
