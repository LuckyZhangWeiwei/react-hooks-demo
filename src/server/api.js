const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();
app.use(cors());
app.use(logger("dev"));

app.get("/api/users", function (req, res) {
  let currentPage = parseInt(req.query.currentPage);
  let pageSize = parseInt(req.query.pageSize);
  let total = 26;
  let list = [];
  let offset = (currentPage - 1) * pageSize;
  for (let i = offset; i < offset + pageSize; i++) {
    list.push({ id: i + 1, name: `name ${i + 1}` });
  }
  res.json({
    currentPage,
    pageSize,
    totalPage: Math.ceil(total / pageSize),
    list,
  });
});

app.listen(8000, () => {
  console.log("server is running on 8000");
});
