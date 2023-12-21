import React from 'react';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Page1 from './Components/Page1';
import Chatbot from './Components/Chatbot/Chatbot';
import Page3 from './Components/Page3';


const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

