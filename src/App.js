import './App.css';
import React from "react";

function App() {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='logo'/>
          </header>
              <nav className='nav'>
                  <div><a href="#">Profile</a></div>
                  <div><a href="#">Message</a></div>
                  <div><a href="#">News</a></div>
                  <div><a href="#">Music</a></div>
                  <div><a href="#">Settings</a></div>
              </nav>
            <div className="content">
                <div>
                    <img src="https://i.imgur.com/ikJDyFT.jpg" alt="main-img"/>
                </div>
                <div>
                    ava + desk
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}


export default App;
