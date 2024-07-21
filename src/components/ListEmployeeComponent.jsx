import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const navigate = useNavigate();
  
  const Data = [
    {
      id: 1,
      firstName: 'rabii',
      lastName: 'lfarakh',
      email: 'rabii@gmail.com',
    },
    {
      id: 2,
      firstName: 'malak',
      lastName: 'serrakh',
      email: 'malak@gmail.com',
    },
    {
      id: 3,
      firstName: 'habiba',
      lastName: 'serrakh',
      email: 'serrakh@gmail.com',
    },
  ];

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
            {Data.map((employee) => (
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
