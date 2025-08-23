import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import { sendResponse } from "../utils/sendResponse";
import { responseCode } from "../constants/responseCode";
import { ResponseMessage } from "../constants/responseMessage";

class AuthController {
  // instance class
  private authservice = new AuthService();
  //define method
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.authservice.signUp(req.body);
      sendResponse(res, responseCode.CREATED, ResponseMessage.CREATED);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
