import React from 'react'
import './App.css';
import HomePage from './Pages/homepage/homepage.components'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './Pages/shop/shop.component';
 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
