// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
// return (
// <div className='app'>
//   <Navbar/>
//   <Main/>
//   <div className='sidebar'>
//     <Sidebar1/>
//     <Sidebar2/>
//     </div>
//     <Footer/>
//     </div>
//  )
// }
// export default App


// import React, { Component, startTransition } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
// export default class App extends Component {
//     render() {
//         return (
//         <div>
//             <CBCPropEx
//             username="Vamshi"
//             age={20}
//             hobbies={["Playing", "reading books" , "stock"]}
//             address={{city: "sircilla", area: "Gandinagar"}}
//             sendFun={function(){alert("hi i am vamshi")}}
//             />
// </div>
//         )
//     }
//   }


// import React from 'react'
// import CBCStateEx from './stateexample/CBCStateEx'
// const App = () => {
//   return (
//     <div>
//         <CBCStateEx/>
//     </div>
//   )
// }
// export default App

import React from 'react'
import FBCStateEx from './stateexample/FBCStateEx'
const App = () => {
  return (
    <div>
        <FBCStateEx/>
    </div>
  )
}
export default App