import { ErrorMessage } from "../constants/responseMessage";
import { responseCode } from "../constants/responseCode";
import { ISignUpDto } from "../dto/auth.dto";
import AppError from "../errors/appError";
import AuthRepository from "../repositories/auth.repository";
import { verifyEmailTemplate } from "../templates/verifyEmail.template";
import { generateToken } from "../utils/generateToken";
import { sendEmail } from "../utils/sendMail";

class AuthService {
  // instance class
  private authRepository = new AuthRepository();
  //define method
  signUp = async (data: ISignUpDto) => {
    const result = await this.authRepository.createUser(data);

    if (!result) {
      throw new AppError(
        ErrorMessage.CREATE_FAILED,
        responseCode.INTERNAL_SERVER_ERROR
      );
    }
    const { newUser, role } = result;

    const token = generateToken(
      {
        id: newUser.id,
        isVerified: newUser.isVerified,
        role: role,
      },
      "1h"
    );
    const subject = "Verify Your Email";
    const urlFe = `${process.env.BASIC_URL_FE}/verify/${token}`;
    const html = verifyEmailTemplate(newUser.name, urlFe);
    await sendEmail(newUser.email, subject, html);

    return result;
  };
}

export default AuthService;
