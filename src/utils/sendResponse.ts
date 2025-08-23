import { Response } from "express";

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T,
  token?: string
) => {
  return res.status(statusCode).json({
    result: { success: true, message, data, token },
  });
};
