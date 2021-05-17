import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fruit1/>
        <Fruitbis/> 
        <Fruit2/>
        <Content/> 
        <Fruit3/>  
        <Fruit4/> 
        <HelloFruit/>
        <Element/> 
        < Exercice02/>
      </header>
    </div>
  );
}

class Content extends Component{
  render(){
    return(
      React.createElement('div',null, React.createElement('h2',null,'Mon premier h2 react'))
    )
  }
}

class Fruit2 extends Component{
  render(){
    return(
      <div>Je suis le fruit des classes</div>
    )
  }
}

const Fruit1 = () => {
  const name = 'Shirley'
  return(
    <div>
      <h1>Mon projet</h1>
      <p>Je suis {(name) ? name : 'un fruit inconnu'}</p>
    </div>
  )
}

function Fruitbis(){
  const beauty = 'bella comme la papaya'
  return(
    <div> Je suis {beauty} </div>
  )
}

function Fruit3(){
  const fruits = ['une carambole','une pomme malaka','un corrosol']
  return(
    <div> Je suis {fruits.map( nom => <p>{nom}</p>)}</div>
  )
}

function Fruit4(){
  const name='une sapotille';
  if(name){
    return(
      <div>Je suis {name} </div>
    )
  } else {
    return(
      <div>Je suis un fruit inconnu</div>
    )
  }
}

const TextFruit = () => {
  return <p>Hello</p>;
}

const NameFruit = () => {
  var user = 'je suis une pêche';
  return <span>{user} </span>;
};

const HelloFruit = function() {
  return(
    <div>
      <TextFruit/>
      <NameFruit/>
    </div>
  )
}

function FormatName(){
  const user = {
    nom : 'BERCHEL',
    prenom : 'Shirley'
  }
  return(
      // <p>Mon nom est {user.nom} et mon prénom est {user.prenom}</p>
      <p>{user.nom} {user.prenom}</p>
  )
}

function Element(){
  return(
    <h1>
      <FormatName/>
    </h1>
  )
}

function Exercice02(){
  const fruits = ['Pomme','Pêche','Poire','Abricot']
  return(
    <ul>
      {fruits.map( nom => <li>{nom}</li>)}
    </ul>
  )
}

export default App;
