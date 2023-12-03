const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Fakebook:Fakebook@cluster0.gdgpsj7.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



//Insert();
const app = express()
const port = 3000




async function Insert(user, pass){
  try {
    //client.connect();
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("Fakebook");
    const users = database.collection("users");
    
    // Create a document to insert
    const doc = {
      username: user,
      password: pass,
    }
    // Insert the defined document into the "haiku" collection
    const result = await users.insertOne(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    //await client.close();
  }
}
async function SelectUser(user){
  try {
    //client.connect();
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("Fakebook");
    const users = database.collection("users");

    //query and options to find record
    const query = { username: user };
    const options = {
      // Sort matched documents in descending order by rating
      sort: { "users.username": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, username: 1, password: 1 },
    };


    // Insert the defined document into the "haiku" collection
    const result = await users.findOne(query, options);
    // Print the ID of the inserted document
    console.log(`Username: ${result.username} <br> password: ${result.password}`);
  } finally {
     // Close the MongoDB client connection
    //await client.close();
  }
}


app.get('/user/register', (req, res) => {
  Insert("NowyUser","Password");
  res.send('Hello World!')
})

app.get('/user/login', (req, res) => {

    SelectUser("NowyUser");
    res.send('Hello World!')
  }) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
