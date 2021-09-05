import express from "express";
const router = express.Router();

router.get("/api/users/currentuser",(req,res)=>{
    res.send("Current user hello");
});

export {router as currentUserRouter}