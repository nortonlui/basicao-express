const express = require('express');
const conf = require('./config/config');
const app = express();

// Routes
app.use('/stories', require('./routes/stories'));

// Route default
app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(conf.PORT, (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log(`Server is running on port ${conf.PORT}`);
  }
});
