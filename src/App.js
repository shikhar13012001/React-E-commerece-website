import React from 'react'
import './App.css';
import HomePage from './Pages/homepage/homepage.components'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './Pages/shop/shop.component';
 import Header from"./components/Header/header.component"
import  SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
