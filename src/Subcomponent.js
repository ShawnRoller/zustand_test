import './App.css';
import { useStore, useSharkStore, useConfigStore } from "./App";

function Subcomponent() {
  const bears = useStore(state => state.bears);
  const increasePopulation = useStore(state => state.increasePopulation);
  const removeAllBears = useStore(state => state.removeAllBears);

  //Sharks
  const sharks = useSharkStore(state => state.sharks);
  const increaseSharkPopulation = useSharkStore(state => state.increasePopulation);
  const removeAllSharks = useSharkStore(state => state.removeAllSharks);

  // Environment
  const environment = useConfigStore(state => state.environment);
  const setEnvironment = useConfigStore(state => state.setEnvironment);
  const nextEnvironment = environment === "QA1" ? "Prod" : "QA1";

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
    </div>
  );
}

export default Subcomponent;
