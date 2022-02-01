const fs = require("fs");

try {
  const data = fs.readFileSync(__dirname + "/propasls_templates", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log("async exampele");
