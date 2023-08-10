import "dotenv/config";
import express from "express";

import getAlbum from "../api/getAlbum.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", getAlbum);
