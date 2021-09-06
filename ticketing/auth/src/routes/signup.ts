import express,{Request,Response} from "express";
const router = express.Router();
import {body,validationResult} from "express-validator"
import {RequestValidationError} from "../errors/request-validation"

import {User} from "../models/user"
router.post("/api/users/signup",[
    body('email')
    .isEmail()
    .withMessage('Email must be valid'),
    body('password')
    .trim()
    .isLength({min:4,max:20})
    .withMessage("PAssword must be between 4 to 20 words")
],async(req:Request,res:Response)=>{
    const errors = validationResult(req);
    const {email,password} = req.body;
    
    if(!errors.isEmpty()){
        console.log("errors 1234:",errors)
        throw new RequestValidationError(errors.array());
    }
    console.log("email:",email)
    // return res.send({"eror":errors})
    const exsistinguser = await User.findOne({email});
   if(exsistinguser){
       console.log("Email in Use check");
       return res.send({});
   }
   const user = User.build({
       email,password
   })
   await user.save();
   res.status(200).send(user)

});

export {router as signupRouter}