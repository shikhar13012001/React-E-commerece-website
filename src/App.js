import React from 'react'
import './App.css';
import HomePage from './Pages/homepage/homepage.components'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './Pages/shop/shop.component';
 import Header from"./components/Header/header.component"
import  SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
unsubscribeFromAuth=null
  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
render() { return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );}
}

export default App;
