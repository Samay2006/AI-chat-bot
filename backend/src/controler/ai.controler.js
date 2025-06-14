import { main } from "../sevices/googleai.js";

const chat=async (req,res)=>{

    try {
        // const data=req.query.data;
        const prompt=req.body.code;
        if(!prompt){
            return res.status(400).send("prompt is requred")
        }
const da=await main(prompt);
// console.log("recivie")
        res.send(da)
       
    } catch (error) {
        console.log("problem in chat controler",error.message);
        res.status(500).json({error:"internal server error"})
    }
}

export {chat}
