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
} from "./FileUploader.styles.js";
import { uploadFile } from "../../services/file_uploader_service";
import MessagePlaceholder from "../MessagePlaceholder/MessagePlaceholder.js";
import DataContext from "../../provider";

const FileUploader = (props) => {
  const dataContext = useContext(DataContext);
  const classes = useStyles();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
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

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      setIsSuccess(false);
      uploadWithFormData();
      e.preventDefault();
    }
  };

  const showAlertMessage = (message, severity) => {
    return (
      <MessagePlaceholder
        open={isSuccess}
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
              onKeyPress={handleKeypress}
            />

            <FileUploadWrapper>
              <AddIcon
                className={classes.uploadIcon}
                fontSize="large"
                onClick={() => {
                  inputRef.current.click();
                  setIsSuccess(false);
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
          </form>
        </Container>
      </Box>
    </>
  );
};

export default FileUploader;
