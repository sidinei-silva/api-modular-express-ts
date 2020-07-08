import { Module } from '../../../utils';
import { HelloControlleHandleNoAuth } from './api';

class HelloModule extends Module {
  constructor() {
    super();
    this.controllers = [HelloControlleHandleNoAuth];
    this.subModules = [];
  }
}

export default new HelloModule();
