const { initDatabase, pool } = require('../config/database');

class User {
  static async create({ phone, password, name }) {
    await initDatabase();
    const client = pool();
    const result = await client.query(
      'INSERT INTO users (phone, password, name) VALUES ($1, $2, $3) RETURNING id',
      [phone, password, name]
    );
    return result.rows[0].id;
  }

  static async findByPhone(phone) {
    await initDatabase();
    const client = pool();
    const result = await client.query(
      'SELECT * FROM users WHERE phone = $1',
      [phone]
    );
    return result.rows[0];
  }

  static async findById(id) {
    await initDatabase();
    const client = pool();
    const result = await client.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = User;