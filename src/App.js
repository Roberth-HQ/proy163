import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import MainPage2 from './MainPage2';
import MainPage3 from './MainPage3';
import MainPage4 from './MainPage4';

const App = () => {
    return (
        <Router>
            <Routes>
              <Route exact path="/proy163" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/MainPage2" element={<MainPage2 />} />
                <Route path="/MainPage3" element={<MainPage3 />} />
                <Route path="/MainPage4" element={<MainPage4 />} />
            </Routes>
        </Router>
    );
};

export default App;
