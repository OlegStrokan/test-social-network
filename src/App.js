import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter,Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
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
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
