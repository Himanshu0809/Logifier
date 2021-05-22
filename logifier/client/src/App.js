import React, { useEffect, useState } from 'react';
import './App.css';

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
      <h2> Call out to API </h2>
      <p> {data} </p>
    </div>
  );
}

export default App;
