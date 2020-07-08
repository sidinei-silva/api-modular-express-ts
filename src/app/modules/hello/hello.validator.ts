import { YupTranslate as Yup } from '../../../utils';

class HelloValidator {
  public name = Yup.string();

  public email = Yup.string().email();

  get storeValidation() {
    return Yup.object().shape({
      name: this.name.required(),
      email: this.email.required(),
    });
  }
}

export default new HelloValidator();
