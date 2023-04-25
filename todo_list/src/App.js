import styles from "./App.module.css";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className={styles.App}>
      <Todos />
    </div>
  );
}

export default App;
