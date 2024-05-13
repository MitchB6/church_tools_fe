import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState('Nahhhh');
  const get_hello_world = async () => {
    try {
      const response = await axios.get('http://localhost:5000/hello');
      console.log(response);
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
