import express from "express";

const app = express();
const port = 4000;


function add(...num) {
  return num.reduce((acc, n) => acc + n, 0);
}

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
