const express = require("express");
const mysql = require("mysql");

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const app = express();

const sql = `INSERT INTO people(name) values('Paulo José')`;
connection.query(sql);

app.get("/", (req, res) => {
  connection.query("select * from people", (err, result, fields) => {
    const peopleList = result.map((e) => `<li>${e.name}</li>`).join("");
    res.send(`<h1>Full Cycle Rocks!</h1>
        <ul>
            ${peopleList}
        </ul>
      `);
  });
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
