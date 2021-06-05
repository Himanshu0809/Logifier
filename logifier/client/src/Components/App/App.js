import React, { useEffect, useState } from "react";
import { BackendData } from "./App.styles.js";
import FileUploader from "../FileUploader";
import Navbar from "../Navbar/Navbar.js";
import Container from "@material-ui/core/Container";
import DataGrid from "../DataGrid/DataGrid.js";
import Footer from "../Footer/Footer.js";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch("/api/hello");
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      setData(body.express);
    };
    getResponse();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <FileUploader />
        <BackendData> {data} </BackendData>
      </Container>
      <DataGrid />
      <Footer />
    </>
  );
}

export default App;
