import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import UsersContainer from './components/users/UsersContainer';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app__content'>
          <Route path='/profile'
            render={() => <ProfileContainer />} />

          <Route path='/dialogs'
            render={() => <DialogsContainer />} />

          <Route path='/users'
            render={() => <UsersContainer />} />


          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;


