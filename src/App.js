import logo from './logo.svg';
import './App.css';
import{Component} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fruit2/>
        <Fruit1/>
        <Fruitbis/>
      </header>
    </div>
  );
}

class Fruit2 extends Component{
  render(){
    return(
      <div>
        <h1>Mon projet</h1>
        <p>Je suis le fruit des classes</p>
      </div>
    )
  }
}

const Fruit1 = () => {
  return(
    <div>Je suis le fruit1</div>
  )
}

function Fruitbis(){
  return(
    <div> Je suis le fruit2</div>
  )
}

export default App;
