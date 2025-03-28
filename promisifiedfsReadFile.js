// Create promisified version of  fs.readFile
const fs = require("fs");
function promisifiedReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if(!error) {
        resolve(data);
      } else {
        reject(error);
      }
    })
  })
}

promisifiedReadFile("../../c.txt")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

