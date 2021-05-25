import React, { useEffect, useState } from 'react';
import { BackendData} from './App.styles.js';
import FileUploader from '../FileUploader';

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
    <>
    <FileUploader />
      <BackendData> {data} </BackendData>
    </>
  );
}

export default App;
