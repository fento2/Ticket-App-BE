import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import { ErrorMessage } from "../constants/responseMessage";
import { responseCode } from "../constants/responseCode";
import { verify } from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError(
        ErrorMessage.TOKEN_NOT_PROVIDED,
        responseCode.UNAUTHORIZED
      );
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new AppError(ErrorMessage.INVALID_TOKEN, responseCode.UNAUTHORIZED);
    }
    if (!process.env.TOKEN_KEY) {
      throw new AppError(
        ErrorMessage.SERVER_MISSING_SECRET_KEY,
        responseCode.INTERNAL_SERVER_ERROR
      );
    }
    const checkToken = verify(token, process.env.TOKEN_KEY);
    res.locals.decript = checkToken;
    next();
  } catch (error) {
    next(error);
  }
};
