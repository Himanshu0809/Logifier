import React, { useState} from "react";
import axios from "axios";
import "./fileUpload.css";

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
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    submitForm("multipart/form-data", formData, (msg) => console.log(msg));
  }

  return (
    <div className="App">
      <h2>Upload Form</h2>
      <form>
        <label>
          File Title
          <input
            type="text"
            name="name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Give a title to your upload"
          />
        </label>

        <label>
          File
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <input
          type="button"
          value="Upload"
          onClick={uploadWithFormData}
        />
      </form>
    </div>
  );
}

export default FileUploader;
