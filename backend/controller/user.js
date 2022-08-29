const User = require("../models/user")


module.exports = {
    async  AddUser(req,res) {
            try{
                return res.status(200).send({status:true,message:"User Created Successfuly"});
            }
            catch(error){
                return res.status(500).send({status:false,message:"Something Went Wrong",error:error});
            }
    }
}