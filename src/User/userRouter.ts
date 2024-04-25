import express from "express";
import { createUser, forgetPassword, loginUser, resetPassword } from "./userControllers";
import { loginValidationArray, registrationValidationArray } from "../helpers/validators";

const userRouter = express.Router();



userRouter.post("/register", registrationValidationArray, createUser);
userRouter.post("/login", loginValidationArray, loginUser);
userRouter.post("/forgot-password", forgetPassword);
userRouter.post("/reset-password/:id/:token", resetPassword);

export default userRouter;