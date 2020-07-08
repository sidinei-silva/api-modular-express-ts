import { Router, Request, Response } from 'express';

import { Controller, ExceptionError } from '../../../../utils';

class HelloControlleHandleNoAuth extends Controller {
  constructor() {
    super();
    this.path = '/';
  }

  initRoutes(route: Router) {
    route.get(this.path, this.index);
    route.get(`/error`, this.error);
  }

  private async index(req: Request, res: Response) {
    return res.status(200).json({
      status: 'success',
      data: {
        message: 'Hello Modulari',
      },
    });
  }

  // Chamada simulando error
  private async error(req: Request, res: Response) {
    throw new ExceptionError(401, {
      title: 'Ops...',
      messages: ['Este é um exemplo de error'],
    });
  }
}
export default new HelloControlleHandleNoAuth();
