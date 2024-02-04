const { ObjectId } = require('mongodb');
const getDB = require('./db');

const getAllProducts = async () => {
  const db = await getDB(); // Call getDB() to get the database object
  return await db.products.find().toArray();
};

const getProduct = async (id) => {
  const db = await getDB(); // Call getDB() to get the database object
  return await db.products.findOne({ _id: new ObjectId(id) });
};

module.exports = {
  getAllProducts,
  getProduct,
};
