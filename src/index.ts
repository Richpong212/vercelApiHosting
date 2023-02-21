import { config } from "dotenv";
import express, { Request, Response } from "express";

config();

const app = express();
const port = process.env.SERVERPORT;

app.get("/", (_req: Request, res: Response) => {
  return res.send({
    message: "You are done!",
    Support: `if this helped you, please support me on ${"https://www.youtube.com/channel/UCT5Uuqffg0JB4W9uJuv4rNg"}`,
  });
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
