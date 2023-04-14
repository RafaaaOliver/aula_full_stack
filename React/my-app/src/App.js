import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
// import Home from './Home';
// import Sobre from './Sobre';
import Usuario from './Usuario';
import Home from './Home';
import Alunos from './Alunos';

export default function App() {
  return (
      <>
    <header>
    <p><Link to='/home'>Home</Link></p>
    <p><Link to='/usuario'>Usuario</Link></p>
    <p><Link to='/Alunos'>Alunos:</Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/Alunos' component= {Alunos}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main></>
  );
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           First Project
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return(
//     <div>
//       <h1>Isso é o React</h1>
//     </div>
//   )
// }

//export default App;
