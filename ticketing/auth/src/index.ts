import express from "express";

import { json } from "body-parser"
import {currentUserRouter} from "./routes/current-user"
import {signinRouter} from "./routes/signin"
import {signoutRouter} from "./routes/signout"
import {signupRouter} from "./routes/signup"
const app = express();

app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
console.log("Its working")
app.listen('3000', () => {
    console.log("Listning on port 3000123!!!!");
});