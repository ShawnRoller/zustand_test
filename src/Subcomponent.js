import './App.css';
import { useStore, useSharkStore, useConfig } from "./App";
import { useColors } from './hooks';

const getRandomColor = () => {
  const COLORS = ['red', 'blue', 'yellow', 'orange', 'pink', 'green'];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  return color;
}

function Subcomponent() {
  const bears = useStore(state => state.bears);
  const increasePopulation = useStore(state => state.increasePopulation);
  const removeAllBears = useStore(state => state.removeAllBears);

  //Sharks
  const sharks = useSharkStore(state => state.sharks);
  const increaseSharkPopulation = useSharkStore(state => state.increasePopulation);
  const removeAllSharks = useSharkStore(state => state.removeAllSharks);

  // Environment
  // const environment = useConfigStore(state => state.environment);
  // const setEnvironment = useConfigStore(state => state.setEnvironment);
  // const nextEnvironment = environment === "QA1" ? "Prod" : "QA1";

  const [colors, addColor] = useColors();
  const configStore = useConfig();
  const environment = configStore.environment;
  const setEnvironment = configStore.setEnvironment;
  const nextEnvironment = environment === "QA1" ? "Prod" : "QA1";

  const colorStyle = (color) => {
    return {
      color,
    }
  }

  return (
    <div>
      <p>
        This is a subcomponent
      </p>
      <button onClick={increasePopulation}>one up</button>
      <h1>{bears} bears around here</h1>
      <button onClick={removeAllBears}>Remove them all!</button>
      <br />
      <button onClick={increaseSharkPopulation}>one up</button>
      <h1>{sharks} sharks around here</h1>
      <button onClick={removeAllSharks}>Remove them sharks!</button>
      <h1>current environment: {environment}</h1>
      <button onClick={() => setEnvironment(nextEnvironment)}>Change the environment</button>
      {colors.map(color => (
        <p style={{ color }}>{color}</p>
      ))
      }
      <button onClick={() => {
        const newColor = getRandomColor();
        addColor(newColor)
      }
      }>Add a random color</button>
    </div >
  );
}

export default Subcomponent;
