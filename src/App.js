import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fruit1 />
        <Fruitprop type="kiwi" poids="100"/>
        <Fruitprop2 type="tomate" poids="50"/>
        <Fruitprop2 type="jujube" poids="1.5"> et je déchire comme fruit !</Fruitprop2>
        <Fruitbis/> 
        <Fruit2/>
        <Content/> 
        <Fruit3/>  
        <Fruit4 /> 
        <HelloFruit/>
        <FormatName nom="BERCHEL" prenom="Shirley"/>
        <Exercice02/>
        <Fruits2/>
        <User name="John Doe" age="50"/>
        <Counter/>
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

function Fruitprop(props){
  return(
    <div> Je suis {props.type} et de poids {props.poids}</div>
  )
}

const Fruitprop2 = ({type,poids,children}) =>{
  return(
    <div> Je suis {type}, de poids {poids} {children}</div>
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

function FormatName(props){
  const user = {
    nom : props.nom,
    prenom : props.prenom
  }
  return(
      // <p>Mon nom est {user.nom} et mon prénom est {user.prenom}</p>
      <h1>{user.nom} {user.prenom}</h1>
  )
}

// function FormatName(){
//   const user = {
//     nom : 'BERCHEL',
//     prenom : 'Shirley'
//   }
//   return(
//      // <p>Mon nom est {user.nom} et mon prénom est {user.prenom}</p>
//       <p>{user.nom} {user.prenom}</p>
//   )
// }

// function Element(){
//   return(
//     <h1>
//       <FormatName/>
//     </h1>
//   )
// }

function Exercice02(){
  const fruits = ['Pomme','Pêche','Poire','Abricot']
  return(
    <ul>
      {fruits.map( nom => <li>{nom}</li>)}
    </ul>
  )
}

class Fruits2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fruits:[
        {
          type:"pomme",
          poids:"100"
        },
        {
          type:"fraise",
          poids:"10"
        },
      ],
      legume:"courgette"
    }
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <p>Je suis un fruit de type {this.state.fruits[1].type} et je pése {this.state.fruits[1].poids} grammes.</p>
        <p>Je suis un fruit de type {this.state.fruits[0].type} et je pése {this.state.fruits[0].poids} grammes.</p>
        <p>Je suis un légume appelé {this.state.legume}.</p>
        <button onClick={this.changeFruits}>Click to change</button>
      </div>
    )
  }
//**Fonction dans le composant */
  changeFruits = () => {
    this.setState({
      fruits:[
        {
          type:"poire",
          poids:"90"
        },
        {
          type:"cerise",
          poids:"11"
        }
      ]
    })
  }
}

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name :"Jane Doe",
      age :"30"
    }
  }
  render(){
    return(
      <div>
        <p>Cliente : {this.state.name}</p>
        <p>Age : {this.state.age}</p>
        <button onClick={this.changeUser}>Change user</button>
      </div>
      
    )
  }

  changeUser = () => {
    this.setState ({
      name : this.props.name,
      age : this.props.age
    })
  }
}

//Exercice 02 - Compteur
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
    //Notat
    ion avec Bind
    this.handleSomething = this.handleSomething.bind(this);
  };
  render(){
    console.log(this.state)
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick = {this.handleSomething}> Reset </button>
      </div>
    )
  };

  handleSomething() {
    //*Fonction fléché doit tjrs avoir un return
    this.setState ((state) => {
      return{
        count : state.count + 1
      }
    })
    //Fonction de base
    // this.setState ({
    //     count : this.state.count + 1
    // })
  }
}

export default App;
