import React from 'react';
import { render } from "react-dom";
import { Wrapper } from './Wrapper'

const onChange = ({ start, end }) => {
  console.log(start)
  console.log(end)
}

const App = () => (
  <Wrapper
    onChange={onChange}
  />
);

render(<App />, document.getElementById("root"));
