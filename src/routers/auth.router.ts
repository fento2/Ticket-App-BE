import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { signUpSchema } from "../middleware/validation/auth.validation";
import { validator } from "../middleware/validator";

class AuthRouter {
  private route: Router;
  private authController = new AuthController();

  constructor() {
    this.route = Router();
    this.initializeRouter();
  }

  private initializeRouter = (): void => {
    this.route.post(
      "/sign-up",
      validator(signUpSchema),
      this.authController.signUp
    );
  };

  getRouter = () => {
    return this.route;
  };
}
export default AuthRouter;
