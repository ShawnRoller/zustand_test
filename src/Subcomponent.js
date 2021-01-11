import './App.css';
import { useStore, useSharkStore } from "./App";

function Subcomponent() {
  const bears = useStore(state => state.bears);
  const increasePopulation = useStore(state => state.increasePopulation);
  const removeAllBears = useStore(state => state.removeAllBears);

  //Sharks
  const sharks = useSharkStore(state => state.sharks);
  const increaseSharkPopulation = useSharkStore(state => state.increasePopulation);
  const removeAllSharks = useSharkStore(state => state.removeAllSharks);

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
    </div>
  );
}

export default Subcomponent;
