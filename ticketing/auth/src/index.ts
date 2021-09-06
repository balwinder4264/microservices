import express from "express";
import "express-async-errors"
import { json } from "body-parser"
import {currentUserRouter} from "./routes/current-user"
import {signinRouter} from "./routes/signin"
import {signoutRouter} from "./routes/signout"
import {signupRouter} from "./routes/signup"
import {errorHandler} from "./midllewares/error-handler"
import {NotFoundError} from "./errors/not-found"
const app = express();

app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.all('*',async()=>{
    throw  new NotFoundError()
})
app.use(errorHandler)
console.log("Its working")
app.listen('3000', () => {
    console.log("Listning on port 3000!");
});