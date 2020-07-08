import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';

import { handlerError } from './app/middlewares';
import routes from './routes';
import { ExceptionError } from './utils';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(routes);
  }

  private exceptionHandler() {
    this.express.use(
      async (
        err: ExceptionError | Error,
        req: Request,
        res: Response,
        next: NextFunction,
      ) => {
        return handlerError(err, req, res);
      },
    );
  }
}

export default new App().express;
