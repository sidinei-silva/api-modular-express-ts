import { HelloEntity } from '.';

class HelloService {
  async hello(body: HelloEntity) {
    return `Hello ${body.name}, seu email é ${body.email}`;
  }
}

export default new HelloService();
