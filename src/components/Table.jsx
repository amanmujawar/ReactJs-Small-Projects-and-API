import React, { useState } from "react";

function Table() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({
      name: "",
      age: "",
      email: "",
    });
  };

  const handleDeleteRow = (index) => {
    setUsers((prevUsers) => prevUsers.filter((user, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setUsers([]);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="text"
            className="form-control"
            required
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteRow(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length > 0 && (
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
