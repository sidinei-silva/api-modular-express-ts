import { Request, Response, NextFunction } from 'express';

import { ValidationError, ObjectSchema } from 'yup';

export default function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) =>
    schema
      .validate(req.body, { abortEarly: false })
      .then(() => next())
      .catch((err: ValidationError) => {
        const errors: any = [];

        err.inner.reduce((field, error) => {
          const fields: any = {};
          fields[error.path] = error.message;
          errors.push(fields);
          return {};
        }, {});

        return res.status(400).json({
          status: 'fail',
          message: 'Dados inválidos',
          errors,
        });
      });
}
