import express from "express";

const PORT = 8000
const app = express()

app.listen(PORT, () => {
    console.log(`App is Up and Running in PORT  : ${PORT}`, );   
})