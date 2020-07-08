import { Router } from 'express';

import { HelloModule } from './app/modules/hello';

const routes = Router();

const modules = [HelloModule];

modules.map(m => m.subscribeRoutes(routes));

export default routes;
