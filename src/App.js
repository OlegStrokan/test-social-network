import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                {/*  <Route path='/dialogs' componen t={Dialogs}/>
                  <Route path='/profile' component={Profile}/>*/}
                  <Route path='/dialogs'
                         render={() => <DialogsContainer store={props.store}/>}/>
                  <Route path='/profile'
                         render={() => <Profile
                             store={props.store}/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
