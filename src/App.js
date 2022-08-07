import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <Dictionary defaultKeyword={"water"} />
        </main>
        <footer className="App-footer text-center">
          <small>
            {" "}
            This project was coded by{" "}
            <a href="https://github.com/RadkevychOksana">
              Oksana Radkevych
            </a> and{" "}
            <a href="https://github.com/RadkevychOksana/dictionary-app-react">
               open-sourced on GitHub
            </a> and{" "}
            <a href="https://62efb4977e48ee0008e702a3--gorgeous-sorbet-962294.netlify.app/">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
