import { NextFunction, Request, Response } from "express";
import AppError from "./appError";
import { responseCode } from "../constants/responseCode";

const errorController = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.rc).json({
      result: {
        success: error.success,
        message: error.message,
      },
    });
  }
  const message = error instanceof Error ? error.message : "Unknown Error";

  return res.status(responseCode.INTERNAL_SERVER_ERROR).json({
    result: {
      success: false,
      message,
    },
  });
};
export default errorController;
