var fs = require("fs");
var path = require("path");

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

module.exports = {
    getParsedData : function(fileName) {
        let result = {};
        const filterToken = "----------------------------------------";
        const retVal = readFile(fileName);
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
        console.log(result);
        return JSON.stringify(result);
      }
};
