/* eslint-disable import/no-extraneous-dependencies */
import 'dotenv/config';

import { Request, Response } from 'express';

import Youch from 'youch';

import { ExceptionError } from '../../utils';

export default async function handler(
  err: ExceptionError | Error,
  req: Request,
  res: Response,
): Promise<Response> {
  if (err instanceof ExceptionError) {
    const { statusCode, message, errors } = err;
    return res.status(statusCode).json({
      status: 'error',
      message,
      errors,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();

    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal Server Error' });
}
