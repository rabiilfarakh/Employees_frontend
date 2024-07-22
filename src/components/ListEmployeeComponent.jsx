import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

const navigate = useNavigate();


  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="w-75">
        <div className="">
        <h1 className="text-center mb-4">List Employees</h1>
        <button className="btn btn-primary mb-3" onClick={() => navigate('/add-employee')}>
            Ajouter
        </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
