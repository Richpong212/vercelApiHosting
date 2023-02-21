"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.SERVERPORT;
app.get("/", (_req, res) => {
    return res.send({
        message: "You are done!",
        Support: `if this helped you, please support me on ${"https://www.youtube.com/channel/UCT5Uuqffg0JB4W9uJuv4rNg"}`,
    });
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
