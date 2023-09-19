import {Component} from 'react'
import Welcome from './components/Welcome'

class App extends Component {
  //   state = {isLoggedIn: true}

  render() {
    // const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
      </div>
    )
  }
}

export default App

// // Login Auth
// import {Component} from 'react'
// import './App.css'

// class App extends Component {
//   state = {isLoggedIn: true}

//   render() {
//     const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn) {
//       authButton = <button type="button">Logout</button>
//     } else {
//       authButton = <button type="button">Login</button>
//     }
//     return (
//       <div className="container">
//         <h1>React JS</h1>
//         {authButton}
//       </div>
//     )
//   }
// }

// export default App
