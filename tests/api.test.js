// tests/api.test.js
import request from 'supertest';
import app from '../server/app';

describe('Idea Validation API', () => {
  let authToken;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@solofoundr.com', password: 'test123' });
    authToken = res.body.token;
  });

  test('Validate startup idea', async () => {
    const response = await request(app)
      .post('/api/ideas/validate')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ idea: 'AI-powered startup platform' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('analysis.swot');
  });
});
