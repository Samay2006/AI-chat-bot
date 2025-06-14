import { app } from "./app.js";
import { database } from "./database/database.js";
import dotenv from "dotenv";
// const app=express()
// dotenv.config()
dotenv.config({
    path:"../.env"
})
// console.log()
database().
then(()=>{
app.listen(7000,()=>{
console.log(`server running on:${process.env.port}`)
})
})
.catch((error)=>{
console.log(error.message)
})
