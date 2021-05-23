import React, { useEffect, useState } from 'react';
import './App.css';
import {Button} from '@material-ui/core';

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();
      if(response.status !== 200) throw Error(body.message);
      setData(body.express);
    };
    getResponse();
  }, []);

  return (
    <div className="App">
      <Button variant="contained">Material UI Button</Button>
      <p> {data} </p>
    </div>
  );
}

export default App;
