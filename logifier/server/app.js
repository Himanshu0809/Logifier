const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const fileParser = require("./file_parser");

const upload = multer({
  dest: "uploads/", // this saves your file into a directory called "uploads"
});
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.data}`
  );
});

app.post("/upload", upload.single("file"), (req, res) => {
  fs.renameSync(
    req.file.path,
    req.file.path.replace(
      req.file.filename,
      req.body.title ? req.body.title : req.file.originalname
    )
  );
  const currFileName = req.body.title ? req.body.title : req.file.originalname;
  res.send(fileParser.getParsedData(currFileName));
});

app.post("/uploadUrl", async (req, res) => {
  const url = req.body.data;
  res.send(await fileParser.getUrlParsedData(url));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
