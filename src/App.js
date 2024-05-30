import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState('Nahhhh');
  const get_hello_world = async () => {
    try {
      const response = await axios.get(`${backendURL}/hello`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  get_hello_world();
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default App;
