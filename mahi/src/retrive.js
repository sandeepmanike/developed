import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataPage() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/c1/getData'); // Replace '/api/data' with your backend endpoint
      setDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>age</th>
            <th>dob</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>{data.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPage;
