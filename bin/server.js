const mongoose = require('mongoose');
require('dotenv').config();

const app = require('../app')
//const {DB_HOST,PORT=3000}=process.env;
const { DB_USER, DB_USER_PASS,DB_NAME, PORT = 3000 } = process.env;
const DB_HOST = `mongodb+srv://${DB_USER}:${DB_USER_PASS}@cluster0.vwz9q.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology:true
})
  .then(() => {
    console.log('Database connection successful');
    return app.listen(PORT);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })

