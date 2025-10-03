const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;
const mongoUrl = 'mongodb+srv://typicalpage316:xuaYpyJOhOU2tNnT@typicalpage606.gi6rl7g.mongodb.net/angular?retryWrites=true&w=majority&appName=typicalpage606';

app.use(cors());
app.use(bodyParser.json());

(async () => {
  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    await client.close();
  } catch (err) {
    console.error('Could not connect to MongoDB Atlas:', err);
  }
})();


app.post('/data_from_react', async (req, res) => {
  try {
    const userData = req.body;
    const client = new MongoClient(mongoUrl);
    await client.connect();

    const db = client.db('angular');
    const collection = db.collection('user');

    const result = await collection.insertOne(userData);
    await client.close();

    res.json({ message: 'User added successfully', id: result.insertedId });
  } catch (err) {
    console.error('ERROR in /data_from_react:', err);
    res.status(500).json({ error: 'Error saving user', details: err.message });
  }
});


app.get('/get_many_data', async (req, res) => {
  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();

    const db = client.db('angular');
    const collection = db.collection('user');

    const users = await collection.find({}).toArray();
    await client.close();

    res.json(users);
  } catch (err) {
    console.error('ERROR in /get_many_data:', err);
    res.status(500).json({ error: 'Error retrieving users', details: err.message });
  }
});


app.get('/get_user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const client = new MongoClient(mongoUrl);
    await client.connect();

    const db = client.db('angular');
    const collection = db.collection('user');

    const user = await collection.findOne({ _id: new ObjectId(id) });

    await client.close();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('ERROR in /get_user/:id:', err);
    res.status(500).json({ error: 'Error retrieving user', details: err.message });
  }
});


app.put('/update_user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = { ...req.body };
    delete updatedUser._id; 

    console.log('PUT request for ID:', id);
    console.log('Updated Data (without _id):', updatedUser);

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const client = new MongoClient(mongoUrl);
    await client.connect();

    const db = client.db('angular');
    const collection = db.collection('user');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedUser }
    );

    await client.close();

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found for update' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('ERROR in /update_user:', err);
    res.status(500).json({ error: 'Error updating user', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
