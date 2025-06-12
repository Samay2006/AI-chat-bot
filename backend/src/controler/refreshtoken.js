

const refreshaccesstoken=async(req,res)=>{
const {prompt}=req.body;

if(prompt){
    console.log("it works")
    res.status(200).json({message:"it works"})
}
else{
        res.status(400).json({ error: "prompt is required" });
}
}

export{refreshaccesstoken};