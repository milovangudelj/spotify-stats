import "dotenv/config";
import express, { Express, Request, Response } from "express";

import getAlbum from "../src/getAlbum";

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get("/api/getAlbum", getAlbum);

export default app;
