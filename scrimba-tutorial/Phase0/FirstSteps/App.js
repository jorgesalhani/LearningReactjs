import React from "react"
// import Footer from "./Footer"

// function App() {
//     return (
//         <div>
//             <nav>
//                 <h1>Hello!!</h1>
//                 <ul>
//                     <li>Thing 1</li>
//                     <li>Thing 2</li>
//                     <li>Thing 3</li>
//                 </ul>
//             </nav>
//             <main>
//                 <p>This is the content</p>
//             </main>
//             <Footer />
//         </div>
//     )
// }

// export default App

import Header from "../components/Header.js"
import MainContent from "../components/MainContent.js.js"
import Footer from "../components/Footer.js"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App