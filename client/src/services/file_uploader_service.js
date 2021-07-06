import axios from "axios";
import qs from 'qs';

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

export async function loadUrl(data) {
  const response = await axios({
    url: "/uploadUrl",
    method: "POST",
    data: qs.stringify({data: data}),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).catch((error) => {
    return "error";
  });
  return response;
}
