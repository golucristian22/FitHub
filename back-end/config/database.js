const { createPool} = require("mysql");

const db = createPool({
  host: "localhost",
  user: "root",
  password: "$Mysqlpassword22$#",
  database: "fit_hub",
});

exports.db = db;