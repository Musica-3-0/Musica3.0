const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require ("dotenv")

app.use(cors());
dotenv.config();

app.use(express.json());


const PORT = process.env.PORT || 5100
app.listen(PORT, () =>{
    console.log(`Server running in PORT ${PORT}`)
})