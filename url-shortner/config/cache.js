const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected'));
client.on('error', (err) => console.error('Redis client error:', err));

module.exports = {
  set: (key, value) => client.set(key, value, 'EX', 3600), // Cache for 1 hour
  get: (key) => {
    return new Promise((resolve, reject) => {
      client.get(key, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }
};
