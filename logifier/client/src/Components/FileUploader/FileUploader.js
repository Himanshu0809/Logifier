import React, { useState, useRef } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  TextField,
  Button,
  Card,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddIcon from "@material-ui/icons/Add";
import {
  UploadFileHeader,
  FileUploadWrapper,
  FileUploadText,
} from "./FileUploader.styles.js";

const useStyles = makeStyles((theme) => ({
  uploadFileContainer: {
    backgroundColor: "white",
    marginLeft: "15px",
    border: "1px solid #0000003b",
  },

  uploadContentWrapper: {
    padding: "10px",
    borderBottom: "1px solid #0000003b",
    borderWidth: "20%",
  },

  filaNameInput: {
    backgroundColor: "white",
  },

  uploadIcon: {
    color: "#828282",
    display: "flex",
    justifyContent: "center",
    margin: "4% auto auto auto",
    width: "50%",
    height: "50%",
    border: "6px dashed #828282",
  },

  uploadButtonWrapper: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: "15px",
    margin: "auto",

    "& :hover": {
      backgroundColor: "#dae5ff",
    },
  },

  uploadButton: {
    padding: "15px",
    width: "70%",
    backgroundColor: "#dae5ff",
    color: "black",
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
              className={classes.filaNameInput}
              id="outlined-basic"
              label="File Name"
              style={{ margin: 8 }}
              placeholder="Give a name to your upload"
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
                    <AddIcon
                      className={classes.uploadIcon}
                      fontSize="large"
                      onClick={() => inputRef.current.click()}
                    />
                  </FileUploadText>

                  <input
                    ref={inputRef}
                    type="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FileUploadWrapper>
              </CardMedia>
              <CardActions className={classes.uploadButtonWrapper}>
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
