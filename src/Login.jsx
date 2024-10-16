import {useSate, useEffect} from 'react'

const Login = () => {
    const mainContainerstyle = {
        color: "#000000",
        backgroundColor: "#ffffff",
        padding: "50px",
        maxWidth: "900px"
      }
    
      const containerStyle = {
        padding: "60px 90px",
        borderRadius: "40px",
      }

    return (
        <>
            <div className="main-container" id="capture" style={mainContainerstyle}>
                <div className="container" style={containerStyle}>

                </div>
            </div>
        </>
    )
}

export default Login