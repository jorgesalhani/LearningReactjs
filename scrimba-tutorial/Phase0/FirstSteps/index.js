import React from 'react';
import ReactDOM from 'react-dom';

// ===============
// ReactDOM.render(
//     <h1>Hello World!</h1>,
//     document.getElementById("root")
// )

// ===============
// function MyApp() {
//     return ( 
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
//     )
// }

// ReactDOM.render(
//     <MyApp />,
//     document.getElementById("root")
// )

// ===============
// function MyInfo() {
//     return (
//         <div>
//             <h1>Jorge Salhani</h1>
//             <p>Hello, me!</p>
//             <ol>
//                 <li>Vac 1</li>
//                 <li>Vac 2</li>
//                 <li>Vac 3</li>
//             </ol>
//         </div>
//     )
// }

// ReactDOM.render(
//     <MyInfo />,
//     document.getElementById("root")
// )

// ================
// import MyInfo from "./components/MyInfo.js"

// ReactDOM.render(
//     <MyInfo />,
//     document.getElementById("root")
// )

// ================
// import App from "./App.js"

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

// ================

import App from "./App"

ReactDOM.render(<App />,
    document.getElementById("root")
)