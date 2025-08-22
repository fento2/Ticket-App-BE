import { sign, SignOptions } from "jsonwebtoken";
import { ErrorMessage } from "../constants/errorMessage";
import { HttpStatus } from "../constants/httpStatus";
import AppError from "../errors/AppError";

interface IObjectToken {
  id: number;
  isVerified: boolean;
}
type TimeUnit = `${number}${"s" | "m" | "h" | "d" | "w" | "y"}`;
export const generateToken = (
  objectToken: IObjectToken,
  expiresIn: TimeUnit
) => {
  if (!process.env.TOKEN_KEY) {
    throw new AppError(
      ErrorMessage.SERVER_MISSING_SECRET_KEY,
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
  return sign(objectToken, process.env.TOKEN_KEY, { expiresIn });
};
