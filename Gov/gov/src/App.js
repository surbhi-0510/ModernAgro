import logos from "./logos.jpg";
import "./App.css";
// import Mainpage from './components/Mainpage';
import File from "./components/File";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome!!</h1>
          <h3>
            Here you can see the latest government subsidies provided to the
            farmers by GOVERNMENT OF INDIA.
          </h3>
          <h3>
            यहां आप भारत सरकार द्वारा किसानों को प्रदान की जाने वाली नवीनतम
            सरकारी सब्सिडी देख सकते हैं।
          </h3>
        </div>
        <img src={logos} className="App-logos" alt="logos" />
      </header>
      <File />
    </div>
  );
}

export default App;
