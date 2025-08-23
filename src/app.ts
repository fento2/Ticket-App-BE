import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import errorController from "./errors/error.controller";

const PORT: string = process.env.PORT || "8181";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
    this.errorHandler();
  }

  private configure = (): void => {
    this.app.use(cors());
    this.app.use(express.json());
  };
  private route = (): void => {
    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).send("<h1>Test Tiket Backend</h1>");
    });
  };

  private errorHandler = (): void => {
    this.app.use(errorController);
  };
  start = (): void => {
    this.app.listen(PORT, () => {
      this.app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    });
  };
}
export default App;
