import React from 'react';

const ListEmployeeComponent = () => {
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
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="w-100">
        <h1 className="text-center mb-4">Employees</h1>
        <table className="table table-striped table-bordered w-100">
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
