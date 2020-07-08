import { Router } from 'express';

import request from 'supertest';

import { HelloModule } from '.';
import app from '../../../app';

describe('User Test Module', () => {
  beforeAll(async () => {
    const routes = Router();
    await HelloModule.subscribeRoutes(routes);
  });

  it('Should return status 200', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
  });

  it('Should return message hello', async () => {
    const name = 'Sidinei';
    const email = 'sidinei@example.com';

    const res = await request(app).post('/').send({ name, email });

    expect(res.status).toBe(200);
    expect(JSON.parse(res.text).data.message).toBe(
      `Hello ${name}, seu email é ${email}`,
    );
  });

  it('Should throw a validation error', async () => {
    const data = {
      email: 'sidinei@example.com',
    };
    const res = await request(app).post('/').send(data);

    expect(res.status).toBe(400);
    expect(JSON.parse(res.text).status).toBe('fail');
    expect(JSON.parse(res.text).message).toBe('Dados inválidos');
  });
});
