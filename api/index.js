import "dotenv/config";
import express from "express";

import getAlbum from "../src/getAlbum.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/api/getAlbum", getAlbum);

export default app;
