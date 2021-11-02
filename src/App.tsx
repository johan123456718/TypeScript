import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Button/Button.css';
import { Greeter } from'./model/Greeter';
import { ButtonCounter } from './Button/ButtonCounter';
import { Button } from 'react-bootstrap';

function App() {
  let a = new Greeter("World");

  return (
    <div  className = "App">

      <h1>Super basic project to learn typescript</h1>
      
      <div className = "Center">
        
        <ButtonCounter>
          {({count, setCount}) => (
            <div>
              <Button className = "Button_Size" variant = "primary" onClick = {() => setCount(count + 1)}>+</Button>
              <h1>{count}</h1>
            </div>
          )}
        </ButtonCounter>

        
      </div>
      <h1>{a.getGreeting()}</h1>
      <h1>{a.greet()}</h1>
    </div>
  );
}

export default App;
