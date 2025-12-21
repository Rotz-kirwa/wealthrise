const request = require('supertest');
const app = require('../../app');
const { initDatabase } = require('../../config/database');

describe('Investments API', () => {
  beforeAll(async () => {
    // ensure test secret
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret';
    const db = await initDatabase();
    // Clean tables used in tests
    await db.run('DELETE FROM users');
    await db.run('DELETE FROM transactions');
    await db.run('DELETE FROM investments');
  });

  it('creates an investment and deducts user balance', async () => {
    // Register user
    const registerResp = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test User', email: 'investor@example.com', password: 'password123' })
      .expect(201);

    const token = registerResp.body.token;

    // Add balance
    await request(app)
      .post('/api/test/add-balance')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 1000 })
      .expect(200);

    // Create investment
    const resp = await request(app)
      .post('/api/investments')
      .set('Authorization', `Bearer ${token}`)
      .send({ plan: 'bronze', amount: 200 })
      .expect(201);

    expect(resp.body.investment).toBeDefined();
    expect(Number(resp.body.balance)).toBe(800);
  });
});
