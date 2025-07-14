import { MongoClient } from 'mongodb';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: '.env.local'});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const MONGODB_DB = process.env.MONGODB_DB || 'landing';

async function seed() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }
  if (!MONGODB_DB) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(MONGODB_DB);
    const blogsCollection = db.collection('blogs');

    const jsonPath = path.resolve(process.cwd(), 'data/blogs.json');
    const fileContents = await fs.readFile(jsonPath, 'utf8');
    const blogsData = JSON.parse(fileContents);

    console.log('Deleting existing blogs...');
    await blogsCollection.deleteMany({});

    console.log('Inserting new blogs...');
    const result = await blogsCollection.insertMany(blogsData);
    console.log(`${result.insertedCount} blogs have been seeded successfully.`);

  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

seed(); 