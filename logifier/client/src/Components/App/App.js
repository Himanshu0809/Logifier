import React from "react";
import FileUploader from "../FileUploader";
import Navbar from "../Navbar";
import Container from "@material-ui/core/Container";
import Footer from "../Footer";
import TabPanel from "../Tabs";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <FileUploader />
      </Container>
      <TabPanel />
      <Footer />
    </>
  );
}

export default App;
