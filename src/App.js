import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import './components/Message/Wrap.scss';
import { ChatList } from "./components/ChatList/ChatList"
import { Chat } from './screens/Chat/Chat';
import { ThemeContext } from './utils/ThemeContext';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

function App() {
  const [theme, setTheme] = useState("dark");

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    console.log(' LOGIN ATTEMPT !');
    setAuthed(true);
  };

  const handleLogout = () => {
    console.log(' LOGOUT ATTEMPT !');
    setAuthed(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {   //слушатель события - изменение состояния авторизации
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });

    return unsubscribe;
  }, []);
  // const [messages, setMessages] = useState(initMessages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (

    <ThemeContext.Provider value={{ theme: theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles"
              style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}>
              Articles
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute authed={authed} />} >
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider >

  );
}

export default App;
