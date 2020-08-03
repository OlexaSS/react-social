import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app__content'>
          <Route path='/profile' 
            render={ () => <Profile 
              state={props.appState.profilePage}/> } />
          <Route path='/dialogs' 
            render={ () => <Dialogs 
              state={props.appState.dialogsPage} />} />

              
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )

}

export default App;


