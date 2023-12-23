import express from "express";
import { config } from "./config/config";

const PORT = config.port
const app = express()

app.listen(PORT, () => {
    console.log(`App is Up and Running in PORT  : ${PORT}`, );   
})