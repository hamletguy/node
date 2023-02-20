var generate = require("generate-password");

var password = generate.generate({
  length: 20,
  numbers: true,
  symbols: true,
});
console.log(password);
