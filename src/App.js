import logo from "./logo.png";
import Dictionary from"./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">        
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
      </header>
      <main>
        <Dictionary defaultKeyword = {"sunset"}/>
      </main>
      <footer className="App-footer text-center">
        <small> Coded by Oksana Radkevych</small>
       </footer>
      </div>
    
    </div>
  );
}

