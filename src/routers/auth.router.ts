import { Router } from "express";

class AuthRouter {
  private route: Router;

  constructor() {
    this.route = Router();
    this.initializeRouter();
  }

  private initializeRouter = (): void => {};

  getRouter = () => {
    return this.route;
  };
}
export default AuthRouter;
