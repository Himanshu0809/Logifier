import React, { useState, useRef, useContext, useEffect } from "react";
import { Box, Container, TextField, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddIcon from "@material-ui/icons/Add";
import {
  UploadFileHeader,
  FileUploadWrapper,
  HeaderHorizontalRule,
  FileNameLabel,
  useStyles,
  LoadFileWrapper,
  FileUploadForm,
  UrlUploadForm,
} from "./FileUploader.styles.js";
import { uploadFile, loadUrl } from "../../services/file_uploader_service";
import MessagePlaceholder from "../MessagePlaceholder/MessagePlaceholder.js";
import DataContext from "../../provider";

const FileUploader = (props) => {
  const dataContext = useContext(DataContext);
  const classes = useStyles();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [severity, setSeverity] = useState(null);

  useEffect(() => {
    dataContext.handleUploadedFileData(responseData);
  }, [responseData, dataContext]);

  const submitForm = async (contentType, data) => {
    const response = await uploadFile(contentType, data);
    return response.data;
  };

  const submitUrlForm = async (data) => {
    const response = await loadUrl(data);
    return response.data;
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      uploadWithFormData();
      e.preventDefault();
    }
  };

  const showAlertMessage = (message, severity) => {
    // delay for 3 sec and set it to the false
    setTimeout(()=>{setIsSuccess(false);},3000);
    return (
      <MessagePlaceholder
        open={true}
        message={message}
        severity={severity}
      />
    );
  };

  const uploadWithFormData = async () => {
    if (!file) {
      setAlertMessage("Please attach file to upload");
      setSeverity("error");
      setIsSuccess(true);
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const temp = await submitForm("multipart/form-data", formData);
    setResponseData(temp);
    setAlertMessage("File Uploaded Successfully!!");
    setSeverity("success");
    setIsSuccess(true);
  };

  const uploadWithUrl = async () => {
    if(!url) {
      setAlertMessage("Please add valid URL");
      setSeverity("error");
      setIsSuccess(true);
      return;
    }
    const urlResponse = await submitUrlForm(String(url));
    setResponseData(urlResponse);
    setAlertMessage("URL submitted successfully!!");
    setSeverity("success");
    setIsSuccess(true);
  }

  return (
    <>
      {isSuccess && showAlertMessage(alertMessage, severity)}
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
          <LoadFileWrapper>
            <FileUploadForm autoComplete="off">
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
                onKeyPress={handleKeypress}
              />

              <FileUploadWrapper>
                <AddIcon
                  className={classes.uploadIcon}
                  fontSize="large"
                  onClick={() => {
                    inputRef.current.click();
                  }}
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
            </FileUploadForm>
            <hr />
            <UrlUploadForm>
              <TextField
                className={classes.filaNameInput}
                id="outlined-basic"
                label="URL"
                style={{ margin: 8 }}
                placeholder="Enter a valid URL"
                value={url}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                onKeyPress={handleKeypress}
              />
              <FileUploadWrapper>
                <Button
                  className={classes.uploadButton}
                  variant="contained"
                  value="Upload"
                  color="primary"
                  startIcon={<CloudUploadIcon />}
                  onClick={uploadWithUrl}
                >
                  Submit
                </Button>
              </FileUploadWrapper>
            </UrlUploadForm>
          </LoadFileWrapper>
        </Container>
      </Box>
    </>
  );
};

export default FileUploader;
