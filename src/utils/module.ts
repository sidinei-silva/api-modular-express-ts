import { Router } from 'express';
import { Controller } from '.';

class Module {
  public controllers: Array<Controller> = [];

  public subModules: Array<Module> = [];

  public async subscribeRoutes(routes: Router): Promise<void> {
    await this.controllers.map(c => c.initRoutes(routes));

    this.subscribeSubModules(routes);
  }

  public async subscribeSubModules(routes: Router): Promise<void> {
    await this.subModules.map(sub => sub.subscribeRoutes(routes));
  }
}

export default Module;
