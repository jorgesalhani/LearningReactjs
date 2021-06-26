import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Jorge"
    const lastName = "Salhani"

    const date = new Date()

    return (
        <div>
            <h1>Hello {`${firstName}` + " " + `${lastName}`}!</h1>
            <h2>It is currently about {date.getHours()} o'clock</h2>
        </div>
    )
}

ReactDOM.render(
     <App />,
    document.getElementById("root")
)