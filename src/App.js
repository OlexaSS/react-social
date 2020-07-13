import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/Profile';
import './App.css';


const App = () => {
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app__content'>
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  )
  
}

export default App;


