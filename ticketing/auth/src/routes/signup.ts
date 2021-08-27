import express,{Request,Response} from "express";
const router = express.Router();
import {body,validationResult} from "express-validator"

router.get("/api/users/signup",[
    body('email')
    .isEmail()
    .withMessage('Email must be valid'),
    body('password')
    .trim()
    .isLength({min:4,max:20})
    .withMessage("PAssword must be between 4 to 20 words")
],(req:Request,res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send(errors.array())
    }
    const {email,password} = req.body;

  console.log("Creatin user");
  res.send({})
    //new user 
});

export {router as signupRouter}