import axios from "axios";

export async  function uploadFile(contentType, data) {
  const response = await axios({
    url: "/upload",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  }).catch((error) => {
    return "error";
  });
  return response;
}
