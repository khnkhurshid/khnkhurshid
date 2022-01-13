import logo from './logo.svg';
import './App.css';
import './components/Greet'
import greet from './components/Greet';
import Greet from './components/Greet';

import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        This is Batman living in Gotham City
        </Greet>
     <Hello/>

     <Message/>
     <Counter/>
    </div>
  );
}

export default App;
