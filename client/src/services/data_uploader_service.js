import axios from "axios";

function sendData(data) {
    const retData = axios
    .post("/api/world", {data: data})
    .catch((error) => {
        console.error(error);
    });
    return retData;
}

export default sendData;