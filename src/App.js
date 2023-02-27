import logo from "./logo.svg";
import "./App.css";
import DisplayAnimals from "./components/DisplayAnimals";
import { animals } from "./data";

function App() {
  return (
    <div className="animal-list">
      {animals.map((animal) => {
        return <DisplayAnimals name={animal.name} image={animal.image} />;
      })}
    </div>
  );
}

export default App;