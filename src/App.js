import React from 'react'
import './App.css';
import HomePage from './Pages/homepage/homepage.components'
import {Route,Switch} from 'react-router-dom'


const HatsPage=()=>{
  return(
  <div>
    <h1>Hats </h1>

  </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
