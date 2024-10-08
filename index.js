const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

//middlewares 
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_KEY}@practiceprojects.unbpd.mongodb.net/?retryWrites=true&w=majority&appName=PracticeProjects`;

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
        console.log("Coffee server is successfully connected to MongoDB! Now it works good!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send(('Coffee Server is running'));

})

app.listen(port, () => {
    console.log(`Crud server is running on ${port}`);

})

