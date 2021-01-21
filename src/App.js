import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter,Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
                {/*  <Route path='/dialogs' component t={Dialogs}/>
                  <Route path='/profile' component={Profile}/>*/}
                  <Route path='/dialogs'
                         render={() => <DialogsContainer/>}/>
                  <Route path='/profile/:userId?'
                         render={() => <ProfileContainer/>}/>
                  <Route path='/users'
                         render={() => <UsersContainer/>}/>
                  <Route path='/login'
                         render={() => <Login/>}/>

              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
