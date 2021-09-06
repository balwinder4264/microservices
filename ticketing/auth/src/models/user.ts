import mongoose from "mongoose";

//an interface that descxripbe 
//the properties require to create new user

interface UserAttrs{
    email:string,
    password:string
}
//and interface that describe the properties user model has 
interface userModel extends mongoose.Model<UserDoc>{
     build(attrs:UserAttrs):UserDoc
}
//an interface that describe the properties user documents has
interface UserDoc extends mongoose.Document{
    email:string,
    password:string,
}
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
userSchema.statics.build=(attrs:UserAttrs)=>{
    return new User(attrs)
}

const User = mongoose.model<UserDoc,userModel>('User',userSchema);

export {User};