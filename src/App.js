import React, { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from "./components/Nav";
import Page from "./components/Page";

// components

function App() {
  
  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    },
  ])
  
  const [currentPage, setCurrentPage] = useState(pages[0])
  
  return <div>
    <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}>

        </Nav>
    </Header>
    <main>
        <Page currentPage={currentPage}></Page>
    </main>
    <Footer/>
    </div>
}


export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;
