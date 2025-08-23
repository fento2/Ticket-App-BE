import { sign } from "jsonwebtoken";
import { ErrorMessage } from "../constants/responseMessage";
import { responseCode } from "../constants/responseCode";
import AppError from "../errors/appError";
import { RoleName } from "../../prisma/generated/prisma";

interface IObjectToken {
  id: number;
  isVerified: boolean;
  role: RoleName;
}
type TimeUnit = `${number}${"s" | "m" | "h" | "d" | "w" | "y"}`;
export const generateToken = (
  objectToken: IObjectToken,
  expiresIn: TimeUnit
) => {
  if (!process.env.TOKEN_KEY) {
    throw new AppError(
      ErrorMessage.SERVER_MISSING_SECRET_KEY,
      responseCode.INTERNAL_SERVER_ERROR
    );
  }
  return sign(objectToken, process.env.TOKEN_KEY, { expiresIn });
};
