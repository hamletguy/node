// var msg = "HELLO WORLD";
// console.log(msg);
// var http = require("http");

// var server = http.createServer(function (req, res) {
//   res.write("<h1>Hello Node!!!!</h1>\n");
// });

// server.listen(3000);
// console.log("Node.js web server at port 3000 is running..");

// const fs = require("fs");

// fs.appendFile("welcome.txt", "Hello Node", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.renameSync("welcome.txt", "hello.txt");

// function read() {
//   fs.readFile("hello.txt", (err, data) => {
//     if (err) {
//       console.error("Error in reading file");
//     }
//     console.log(data);
//     console.log("Finished reading file");
//   });
// }

// read();

// setTimeout(() => {
//   fs.renameSync("welcome.txt", "hello.txt");
//   fs.readFile("hello.txt", (err, data) => {
//     if (err) {
//       console.error("Error in reading file");
//     }
//     console.log(data);
//     console.log("Finished reading file");
//   });
// }, 2000);

// var generate = require("generate-password");

// var password = generate.generate({
//   length: 20,
//   numbers: true,
//   symbols: true,
// });
// console.log(password);

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "",
//     pass: "",
//   },
// });

// var mailOptions = {
//   from: "",
//   to: "",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
