import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import './components/Message/Wrap.scss';
import { ChatList } from "./components/ChatList/ChatList"
import { Chat } from './screens/Chat/Chat';
import { ThemeContext } from './utils/ThemeContext';
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';


function App() {
  const [theme, setTheme] = useState("dark");

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
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

  );
}

export default App;
