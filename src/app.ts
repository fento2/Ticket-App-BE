import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from "./errors/AppError";
import { ErrorMessage } from "./constants/errorMessage";
import { HttpStatus } from "./constants/httpStatus";

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
    this.app.use(
      (error: unknown, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof AppError) {
          return res.status(error.rc).json({
            result: {
              success: error.success,
              message: error.message,
            },
          });
        }
        const message =
          error instanceof Error ? error.message : "Unknown Error";

        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          result: {
            success: false,
            message,
          },
        });
      }
    );
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
