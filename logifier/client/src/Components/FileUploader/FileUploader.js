import React, { useState } from "react";
import {

  Button,

} from "@material-ui/core";

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [responseData, setResponseData] = useState(undefined);

  const upload = () => {
    setCurrentFile(selectedFiles[0]);
    let formData = new FormData();

    formData.append("file", currentFile);
    
    fetch("/api/world", {
        method: "POST",
        body: formData,

        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        // Converting to JSON
        .then((response) => {
            console.log(response);
            setResponseData(response);
        } )

        
  };

  const selectFile = (event) => {
    console.log(event.target.files);
    setSelectedFiles(event.target.files);
  };

  return (
    <>
      <label htmlFor="btn-upload">
        <input
          id="btn-upload"
          name="file"
          style={{ display: "none" }}
          type="file"
          onChange={selectFile}
        />
        <Button className="btn-choose" variant="outlined" component="span">
          Choose Files
        </Button>
      </label>
      <div className="file-name">
        {selectedFiles && selectedFiles.length > 0
          ? selectedFiles[0].name
          : null}
      </div>
      <Button
        className="btn-upload"
        color="primary"
        variant="contained"
        component="span"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </Button>
      {responseData}
    </>
  );
}

export default FileUploader;
