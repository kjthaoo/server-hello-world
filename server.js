const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// this connectss to the MongoDB Atlas website - cpy and paste the link here
mongoose.connect('mongodb+srv://kthao43726:5RUd67PJQX7fPhWl@cluster0.ejq1kfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// the server-side functionality here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
