const { MongoClient } = require('mongodb');

const uri = 'mongodb://0.0.0.0:27017/NikeProducts';
let client;

const getDB = async () => {
  try {
    if (!client) {
      console.log('Creating a new client!');
      client = new MongoClient(uri);
      await client.connect();
    } else {
      console.log('Reusing the old client');
    }

    const database = client.db('NikeProducts');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return {
      products,
      orders,
    };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // Propagate the error to the caller
  }
};

module.exports = getDB;
