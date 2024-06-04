const express = require('express');
const mongoose = require('mongoose');

const movieRoutes = require('./routes/movies');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users'); 

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/filmrecensionsplattform', {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).catch(error => console.error(error)); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
