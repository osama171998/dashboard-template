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
                    return res.status(200).send({status:true,message:"User Created Successfuly"});
                }
                
            }
            catch(error){
                return res.status(500).send({status:false,message:"Something Went Wrong",error:error});
            }
    },
    async login(req,res){
        try {
            const {email,password} = req.body;
            console.log(req.body)
            const response = await User.findOne({
               $and:[{
                email,
                password
               }]
            },["_id","firstName","lastName","cnic","email","contactNo"]) 
            const tokenPayload = response
            const generateToken = JWT.sign({
                data:tokenPayload,
            },
                process.env.SECRET_KEY,
                {expiresIn:process.env.EXPIRY})
            if(response) return res.status(200).send({status:true,message:"Login Successful",token:generateToken});
            else return res.status(401).send({status:false,message:"Invalid Credentials"})
        } catch (error) {
            return res.status(500).send({status:false,message:"Something went wrong",error})
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