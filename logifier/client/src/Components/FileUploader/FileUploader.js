import React, { useState, useRef } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, TextField, Button, Card, CardMedia, CardActions } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add';
import { UploadFileHeader, FileUploadWrapper, FileUploadText, FileUploadIcon } from "./FileUploader.styles.js";

const useStyles = makeStyles((theme) => ({
  uploadFileContainer:{
    backgroundColor: '#dae5ff',
    marginLeft: '15px',
    border: '1px solid #0000003b',
  },

  uploadButton:{
    justifyContent: 'center',
    padding: '15px',
    width: '70%',
    margin:'auto'
  }, 

  uploadContentWrapper :{
    padding:'10px',
    borderBottom: '1px solid #0000003b',
    borderWidth: '20%'
  }, 
}));



function submitForm(contentType, data, setResponse) {
  axios({
    url: "/upload",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  })
    .then((response) => {
      setResponse(response.data);
    })
    .catch((error) => {
      setResponse("error");
    });
}

function FileUploader() {
  const classes = useStyles();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    submitForm("multipart/form-data", formData, (msg) => console.log(msg));
  }

  return (
    <>
      <Box
        bgcolor="#dae5ff"
        p={1}
        borderColor="#b9b6b6"
        borderBottom={1}
        border={1}
      >
        <UploadFileHeader>Upload File</UploadFileHeader>
      </Box>
      <Box
        bgcolor="#dae5ff"
        p={1}
        borderColor="#b9b6b6"
        borderBottom={1}
        border={1}
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="File Name"
              style={{ margin: 8 }}
              placeholder="Give a name to your upload"
              InputLabelProps={{
                shrink: true,
              }}
              value={title}
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Card className={classes.uploadFileContainer}>
              <CardMedia className={classes.uploadContentWrapper}>
              <FileUploadWrapper>
              <FileUploadText>
                Add a file here
                <FileUploadIcon onClick={() => inputRef.current.click()}>
                <AddIcon fontSize="large"/>
                </FileUploadIcon>
                
              </FileUploadText>
              
            <input
              ref={inputRef}
              style={{ color: 'white' }}
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            </FileUploadWrapper>
           

              </CardMedia>
            <CardActions className={classes.uploadButton}>
            <Button
              className={classes.uploadButton}
              variant="contained"
              value="Upload"
              color="primary"
              startIcon={<CloudUploadIcon />}
              onClick={uploadWithFormData}
            >
              Upload
            </Button>
            </CardActions>
            
            </Card>
            
          </form>
        </Container>
      </Box>
    </>
  );
}

export default FileUploader;
