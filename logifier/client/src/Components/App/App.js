import React from "react";
import FileUploader from "../FileUploader";
import Navbar from "../Navbar";
import Container from "@material-ui/core/Container";
// import Footer from "../Footer";
import TabPanel from "../Tabs";
import { AppWrapper } from "./App.styles.js";

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Container maxWidth="lg">
        <FileUploader />
      </Container>
      <TabPanel />
      {/* <Footer /> */}
    </AppWrapper>
  );
}

export default App;
