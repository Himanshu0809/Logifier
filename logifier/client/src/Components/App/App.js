import React from "react";
import FileUploader from "../FileUploader";
import Navbar from "../Navbar/Navbar.js";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer.js";
import TabPanel from "../Tabs/TabPanel.js";

function App() {
  
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <FileUploader />
        <TabPanel />
      </Container>
      <Footer />
    </>
  );
}

export default App;
