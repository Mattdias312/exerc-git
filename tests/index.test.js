const request = require('supertest');
const app = require('../src/JS/index'); // Ajuste o caminho

describe('GET /api/test', () => {
  it('should return test message with status', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'Endpoint de teste consolidado',
      status: 'success',
      code: 200
    });
  });
});

describe('GET /api/test-2', () => {
  it('should return test message 2', async () => {
    const res = await request(app).get('/api/test-2');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Branch master endpoint teste 2');
  });
});