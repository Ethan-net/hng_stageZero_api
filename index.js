const express = require("express");
const cors = require("cors");

const router = require("./routes/route");

require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

app.use("/get", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
