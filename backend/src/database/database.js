import mongoose from "mongoose";


const database=async()=>{

try {

   const a=await  mongoose.connect(process.env.databaseapi)
   
console.log("database connected succesfully")
return a;

} catch (error) {
    console.log("not working",error.message)
}
}

export {database}
