import axios from "axios";

export function uploadFile(contentType, data) {
  axios({
    url: "/upload",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });
}
