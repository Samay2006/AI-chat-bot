import { Router } from "express";
import { chat } from "../controler/chat.js";
import { refreshaccesstoken } from "../controler/refreshtoken.js";
const routers=Router();
routers.route("/chat").get(chat);
routers.route("/refreshtoken").post(refreshaccesstoken);

export default routers