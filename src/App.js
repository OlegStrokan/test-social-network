import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from 'react-router-dom'
import {addPost} from "./redux/state";

function App(props) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                {/*  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>*/}
                  <Route path='/dialogs'
                         render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                  <Route path='/profile'
                         render={() => <Profile
                             profilePage={props.state.profilePage}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}/>}/>

              </div>
              {/*<Profile/>*/}
          </div>
      </BrowserRouter>
  );
}


export default App;
