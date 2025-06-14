import { Router } from "express";
import { chat } from "../controler/ai.controler.js";
// import { refreshaccesstoken } from "../controler/refreshtoken.js";
const routers=Router();
routers.route("/responce").post(chat);
// routers.route("/refreshtoken").post(refreshaccesstoken);

export default routers