import logo from './logo.svg';
import './App.css';
import Subcomponent from './Subcomponent';
import create from "zustand";

export const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));

export const useSharkStore = create(set => ({
  sharks: 0,
  increasePopulation: () => set(state => ({ sharks: state.sharks + 1 })),
  removeAllSharks: () => set({ sharks: 0 })
}));

export const useConfigStore = create(set => ({
  environment: "QA1",
  setEnvironment: (newEnvironment) => set({ environment: newEnvironment })
}));

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Subcomponent />
      </header>
    </div>
  );
}

export default App;
