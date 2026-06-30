import { MongoClient, type Db } from 'mongodb';

import { getRequiredEnv } from './config';

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient() {
  if (!globalForMongo.mongoClientPromise) {
    const uri = getRequiredEnv('MONGODB_URI');
    const client = new MongoClient(uri, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
    });
    globalForMongo.mongoClientPromise = client.connect().catch((error) => {
      globalForMongo.mongoClientPromise = undefined;
      throw error;
    });
  }

  return globalForMongo.mongoClientPromise;
}

export async function getAuthDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || 'rnptechsolutions');
}

export function isMongoConnectionError(error: unknown) {
  if (!(error instanceof Error)) return false;

  return (
    error.name === 'MongoServerSelectionError' ||
    error.name === 'MongoNetworkError' ||
    error.message.includes('SSL routines') ||
    error.message.includes('server selection timed out')
  );
}
