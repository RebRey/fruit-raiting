// require mongodb package
const { MongoClient } = require("mongodb");

// create a constant called uri and set it equal to your connection URL
const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    //write your code here:

    console.log("Sever Connected");
    // Create a database called fruitsDB
    const database = client.db("fruitsDB");

    // Create a collection called fruits
    const collection = database.collection("fruits");

    // Create the data
    await collection.insertMany([
      {
        _id: 1,
        name: "apple",
        score: 8,
        review: "Great fruit, has a core with many seeds.",
      },
      {
        _id: 2,
        name: "orange",
        score: 6,
        review: "Kind of sour, but very juicy.",
      },
      {
        _id: 3,
        name: "banana",
        score: 9,
        review: "Very sweet and soft.",
      },
    ]);

    //Find a document, for loop to print the data
    for (let i = 1; i <= 3; i++) {
      field = await collection.findOne({ _id: i });
      console.log(field);
    }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


