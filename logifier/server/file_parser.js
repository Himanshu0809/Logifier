var fs = require("fs");

function processedData(fullPath, data) {
  let tableColumnsName = [];
  let tempData = data.length && data[0];
  for (const key in tempData) {
    tableColumnsName.push(key);
  }
  let splittedPath = fullPath.split("/");
  return [splittedPath[splittedPath.length - 1], tableColumnsName];
}
fs.readFile(
  "/Users/himanshugupta/Desktop/Coding/reactprojects/TeamEagle/logifier/server/uploads/Logs2",
  "utf8",
  function (err, data) {
    var str = data.split("\n");
    var even_odd = 0;
    var result = {};
    k = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] === "----------------------------------------") {
        even_odd ^= 1;
        prevTableName = str[i - 1];
        if (!even_odd) {
          k += 1;
          result[k] = {
            metadata: {
              tableName: prevTableName,
              tableColumns: "",
              noOfRows: "",
            },
            data: [],
          };
        }
      }
      if (
        !even_odd &&
        str[i] !== "----------------------------------------" &&
        str[i] != ""
      ) {
        try {
          result[k].data.push(JSON.parse(str[i]));
        } catch (error) {
          result[k].data.push(str[i].split(" "));
        }
      }
    }

    console.log(result);

    for (const key in result) {
      try {
        var retVal = processedData(
          result[key].metadata.tableName,
          result[key].data
        );
        result[key].metadata.tableColumns = retVal[1];
        result[key].metadata.noOfRows = result[key].data.length;
        result[key].metadata.tableName = retVal[0];
      } catch (error) {
        console.log("Nothing");
      }
    }

    console.log(JSON.stringify(result));
  }
);

console.log("readFile called");
