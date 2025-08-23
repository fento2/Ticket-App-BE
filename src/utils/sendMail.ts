import { transport } from "../config/nodeMailer";

export const sendEmail = async (
  userEmail: string,
  subject: string,
  html: string
) => {
  await transport.sendMail({
    from: process.env.MAILSENDER,
    to: userEmail,
    subject,
    html,
  });
};
