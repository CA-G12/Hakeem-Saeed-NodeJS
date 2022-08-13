const fs = require("fs");

const handler = (res, filePath, contentType) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
    } else {
      res.writeHead(200, { "Content-Type": `${contentType}` });
      res.end(data);
    }
  });
};

module.exports = handler;
