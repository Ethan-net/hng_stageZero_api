const express = require("express");
const cors = require("cors");

const router = require("./routes/route");

require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

app.use("/get", router);

app.listen(port, () => {
  console.log(`now connected on port ${port}`);
});
