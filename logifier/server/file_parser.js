var fs = require("fs");
var path = require("path");
var axios = require("axios");

// get the table name
function getTableName(fullPath) {
  let splittedPath = fullPath.split("/");
  return splittedPath[splittedPath.length - 1];
}

// get the columns name
function getColumnsName(data) {
  let tableColumnsName = [];
  let tempData = data.length && data[0];
  for (const key in tempData) {
    tableColumnsName.push(key);
  }
  return tableColumnsName;
}

function readFile(fileName) {
  let filePath = path.join(__dirname, "uploads", fileName);
  try {
    // read the file synchronusly ...
    var data = fs.readFileSync(filePath, "utf8");
    return { fileContent: data, status: 200 };
  } catch (error) {
    return { data: error, status: 503 };
  }
}

const fetchUrlData = async (url) => {
  try {
    let res = await axios.get(url);
    return { fileContent: res.data, status: 200 };
  } catch (e) {
    console.error(e);
  }
};

const parsingLogic = (retVal) => {
  let result = {};
  const filterToken = "----------------------------------------";
  if (retVal.status !== 200) {
    console.log("something went wrong :-( ");
  } else {
    const splittedData = retVal.fileContent.split("\n");
    let even_odd = 0,
      idx = 0;

    for (let i = 0; i < splittedData.length; i++) {
      if (splittedData[i] === filterToken) {
        even_odd ^= 1;
        logFileName = splittedData[i - 1];
        if (!even_odd) {
          idx += 1;
          result[idx] = {
            metadata: {
              // intially setting the table name with logFileName
              tableName: logFileName,
              tableColumns: "",
              noOfRows: "",
            },
            data: [],
          };
        }
      }

      if (
        !even_odd &&
        splittedData[i] !== filterToken &&
        splittedData[i] != ""
      ) {
        try {
          result[idx].data.push(JSON.parse(splittedData[i]));
        } catch (error) {
          result[idx].data.push(splittedData[i].split(" "));
        }
      }
    }

    for (const key in result) {
      try {
        result[key].metadata.tableColumns = getColumnsName(result[key].data);
        result[key].metadata.noOfRows = result[key].data.length;
        result[key].metadata.tableName = getTableName(
          result[key].metadata.tableName
        );
      } catch (error) {
        console.log("Do Nothing");
      }
    }
  }
  return result;
};

module.exports = {
  getParsedData: function (fileName) {
    const retVal = readFile(fileName);
    result = parsingLogic(retVal);
    return JSON.stringify(result);
  },
  getUrlParsedData: async function (url) {
    return await fetchUrlData(url).then((res) => {
      return JSON.stringify(parsingLogic(res));
    });
  },
};
