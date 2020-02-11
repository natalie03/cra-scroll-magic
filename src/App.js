import React from 'react';
import { useReducer } from 'react';
import './App.css';

import SceneOne from "./components/SceneOne";
import SceneTwo from "./components/SceneTwo";
import SceneThree from "./components/SceneThree";

const initialState = {inViewport: false};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'setInViewport':
      return {inViewport: true};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>Is scene 2 in viewport? {state.inViewport}</p>
      <SceneOne />
      <SceneTwo dispatch={dispatch} />
      <SceneThree />
    </div>
  );
}

export default App;
