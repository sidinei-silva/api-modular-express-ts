import { Router } from 'express';

abstract class Controller {
  public path: string = '';

  abstract initRoutes(route: Router): void;
}

export default Controller;
