const mongose = require("mongoose")
const UserSchema = require("../../schemas/user/index")

const User = mongose.model("User",UserSchema);
module.exports = User;