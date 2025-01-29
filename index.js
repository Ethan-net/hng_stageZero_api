const express = require("express");
const cors = require("cors");

const router = require("./routes/route");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors({ origin: "*", credentials: true }));

app.use("/get", router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
