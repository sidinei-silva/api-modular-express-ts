import { Router, Request, Response } from 'express';
import { Controller } from '../../../../utils';

class HelloControlleHandleNoAuth extends Controller {
  constructor() {
    super();
    this.path = '/';
  }

  initRoutes(route: Router) {
    route.get(this.path, this.index);
  }

  private async index(req: Request, res: Response) {
    return res.status(200).json({
      status: 'success',
      data: {
        message: 'Hello Modulari',
      },
    });
  }
}
export default new HelloControlleHandleNoAuth();
