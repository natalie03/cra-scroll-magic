import React from 'react';
import { useReducer } from 'react';
import './App.css';

import { SceneOne, SceneTwo, SceneThree, SceneFour } from "./components";

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
      <SceneTwo />
      <SceneThree />
      <SceneFour dispatch={dispatch} />
    </div>
  );
}

export default App;
