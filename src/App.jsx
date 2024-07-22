import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
