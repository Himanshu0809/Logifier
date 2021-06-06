import React from "react";
// import { BackendData } from "./App.styles.js";
import FileUploader from "../FileUploader";
import Navbar from "../Navbar/Navbar.js";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer.js";
import TabPanel from "../Tabs/TabPanel.js";

function App() {
  // const [data, setData] = useState(undefined);

  // useEffect(() => {
  //   const getResponse = async () => {
  //     const response = await fetch("/api/hello");
  //     const body = await response.json();
  //     if (response.status !== 200) throw Error(body.message);
  //     setData(body.express);
  //   };
  //   // getResponse();
  // }, []);

  return (
    <>
      <Navbar />
      <br></br>
      <br />
      <Container maxWidth="md">
        <FileUploader />
        {/* <BackendData> {data} </BackendData> */}
      </Container>
      <br />
      <br />
      <Container maxWidth="lg">
        <TabPanel />
      </Container>

      <Footer />
    </>
  );
}

export default App;
