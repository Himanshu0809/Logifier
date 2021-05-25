import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    axios
      .post("/api/world", formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "progress" +
              Math.round((progressEvent.loaded / progressEvent.total) * 100),
            "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={fileSelectedHandler}
        ref={fileInputRef}
      />
      <Button variant="contained" onClick={() => fileInputRef.current.click()}>Pick file</Button>
      <Button  variant="contained" onClick={fileUploadHandler}>Upload</Button>
    </>
  );
}

export default FileUploader;
