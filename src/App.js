import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import Profile from './components/Profile/Profile.jsx'
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      {/*<Profile />*/}
      <Dialogs />
      </div>
    </div>
  );
}

export default App;