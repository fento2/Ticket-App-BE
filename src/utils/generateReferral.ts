import { customAlphabet } from "nanoid";
import { prisma } from "../config/prisma";

const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);

//funct generate referal
export const generateReferral = async (username: string) => {
  let code: string;
  let exists = true;

  const prefix = username.toUpperCase().slice(0, 4);
  do {
    code = prefix + nanoid();
    const existingUser = await prisma.user.findUnique({
      where: { referralCode: code },
    });
    exists = !!existingUser;
  } while (exists);

  return code;
};
