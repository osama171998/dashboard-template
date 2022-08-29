const User = require("../models/user")
const JWT = require("jsonwebtoken")
const env = require("dotenv")
env.config()

module.exports = {
    async  AddUser(req,res) {
            try{
                const {firstName,lastName,email,cnic,contactNo,password,address} = req.body;
                const createUser = {
                    firstName,lastName,email,cnic,contactNo,password,address
                }
                const respone = await User.create(createUser);
                if(respone){
                    const tokenPayload = {
                        id:respone._id,
                        firstName,lastName,email,cnic,contactNo,address
                    }
                    const generateToken = JWT.sign({
                        data:tokenPayload,
                        // privateKey:{algorithm:process.env.ENCRYPTED_ALGO}
                    },
                        process.env.SECRET_KEY,
                        {expiresIn:process.env.EXPIRY})
                    return res.status(200).send({status:true,message:"User Created Successfuly",token:generateToken});
                }
                
            }
            catch(error){
                return res.status(500).send({status:false,message:"Something Went Wrong",error:error});
            }
    },

    async VerifyUser(req,res){
        try {
            const {authorization} = req.headers
            const token = authorization.split(" ")[1];
            const {data} = JWT.verify(token,process.env.SECRET_KEY);
            if(data){
                return res.status(200).send({status:true,message:"User Verified Successfully",detail:data});
            }
        } catch (error) {
            return res.status(500).send({status:false,message:"Something went wrong",error:error});
        }

    }
}