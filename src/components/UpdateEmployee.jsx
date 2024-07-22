import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../services/EmployeeService';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        getEmployeeById(id).then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateEmployee(id, employee).then(() => {
            navigate('/employees');
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={employee.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={employee.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={employee.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update</button>
                <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={() => navigate('/employees')}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
