import redis, { RedisClient } from 'redis';
import Config from '@config/redis';
class RedisConnection {
  private database: RedisClient;

  async connect(): Promise<RedisClient> {
    if (!process.env.REDIS_PASS) {
      throw new Error('Redis server can not be initialized.');
    }
    this.database = redis.createClient(Config.port, Config.host);
    this.database.auth(Config.password);

    return this.database;
  }
}

export default new RedisConnection();
