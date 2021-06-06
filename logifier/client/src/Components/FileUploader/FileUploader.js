import React, { useState, useRef } from "react";
import { Box, Container, TextField, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddIcon from "@material-ui/icons/Add";
import {
  UploadFileHeader,
  FileUploadWrapper,
  HeaderHorizontalRule,
  FileNameLabel,
  useStyles,
} from "./FileUploader.styles.js";
import { uploadFile } from "../../services/file_uploader_service";

function submitForm(contentType, data, setResponse) {
  setResponse(uploadFile(contentType, data));
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
        bgcolor="#f4f4fd"
        p={1}
        borderColor="#b9b6b6"
        borderBottom={1}
        borderRadius={20}
        boxShadow={12}
        border={1}
        justifyContent="center"
      >
        <UploadFileHeader>Upload File</UploadFileHeader>
        <HeaderHorizontalRule />
        <Container maxWidth="lg">
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

            <FileUploadWrapper>
              <AddIcon
                className={classes.uploadIcon}
                fontSize="large"
                onClick={() => inputRef.current.click()}
              />

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
            </FileUploadWrapper>

            <input
              ref={inputRef}
              style={{ display: "none" }}
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <FileNameLabel>{file && file.name}</FileNameLabel>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default FileUploader;
