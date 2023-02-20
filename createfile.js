const fs = require("fs");

fs.writeFile("welcome.txt", "hello node", (err) => {
  setTimeout(() => {
    fs.renameSync("welcome.txt", "hello.txt");
    fs.readFile("hello.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error in reading file");
      }
      console.log(data);
      console.log("Finished reading file");
    });
  }, 2000);
});
