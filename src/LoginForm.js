import React from 'react';
 
import { Login } from './components';
import { Register } from './components'; 

import './App.css';

const LoginForm = () => (
  <div>  
    <Login />
    <Register />
  </div>
);

export default LoginForm;