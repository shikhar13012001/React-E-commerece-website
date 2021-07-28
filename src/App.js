import React from 'react'
import './App.css';
import HomePage from './Pages/homepage/homepage.components'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './Pages/shop/shop.component';
 import Header from"./components/Header/header.component"
import  SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from'react-redux';
import {SetCurrentuser} from './redux/user/user.actions'
class App extends React.Component {
  
unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snap => {
         setCurrentUser({currentUser:{
           id:snap.id,
           ...snap.data()
         }},()=>{
          console.log(this.state);
         })
        });
        
      }
      setCurrentUser(userAuth);
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
const mapDispatchToProps = dispatch=>({
 setCurrentUser: user => dispatch(SetCurrentuser(user))
})
export default connect(null,mapDispatchToProps)(App);
