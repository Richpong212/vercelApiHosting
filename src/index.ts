import { config } from "dotenv";
import express, { Request, Response } from "express";

config();

const app = express();
const port = process.env.SERVERPORT;

app.get("/", (_req: Request, res: Response) => {
  return res.json("Welcome to rental service API");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
