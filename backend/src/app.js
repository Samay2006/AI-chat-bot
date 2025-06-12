import express from "express"
import cookieParser from "cookie-parser"
import core from "cors"
console.log(process.env.CORE_ORIGIN)
const app=express()

app.use(core({
    origin:"*"
}))
app.use(express.json());
app.use(express.urlencoded({limit:"16kb"}))//accapting data threw url

app.use(express.static("public"))//it store use info like pdf and img in our localspace in public folder 

app.use(cookieParser())//it help  us to access the user cookie in our local device(server) and perform the operation on it

import routers from "./router/api.js"

app.use("/api/v1/user/",routers)

// app.use("/api/v1/search",)

export{app}