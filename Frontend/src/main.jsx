// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Event from './Components/Event';
import Profile from './Components/Profile';
import CreateEventForm from './Components/CreateEventForm';
import Sidebar from './Components/Sidebar';
import MyEvents from './Components/MyEvents';
import Dashboard from './Components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'event/:id', element: <Event /> },
      { path: 'profile', element: <Profile /> },
      { path: 'createEvent', element: <CreateEventForm /> },
      { path: 'side', element: <Sidebar /> },
      { path: 'myevents', element: <MyEvents /> },
      { path: 'dashboard', element: <Dashboard /> },
    ]
  },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </React.StrictMode>
);