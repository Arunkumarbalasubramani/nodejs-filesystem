const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");
const timeStamp = new Date().getTime() / 1000;
const dateTime = new Date(timeStamp * 1000);
const fileName = dateTime;
const fileContent = dateTime.toLocaleString();
console.log(fileContent);
app.get("/", (req, res) => {
  res.send("Welcome to NodeFS Task");
});

//API End Point Which will create a File in a particular folder
app.get("/createNewFile", (req, res) => {
  fs.writeFile(
    `./autocreatedFiles/currentDate-time.txt`,
    `This File is Created on Current Date and Time- Current Date is ${fileContent}`,
    (err) => err && console.error(err)
  );
  res.send("File Created Successfully");
});

//API End Point Which will create a File in a particular folder
app.get("/readFile", (req, res) => {
  fs.readFile(`./autocreatedFiles/currentDate-time.txt`, (err, data) => {
    if (err) {
      res.send({ Msg: `Error While reading File - ${err}` });
    } else {
      res.send(`Content Inside the File - ${data}`);
    }
  });
});
//

app.listen(PORT, () => {
  console.log(`App Running and Connected to the PORT ${PORT}`);
});
