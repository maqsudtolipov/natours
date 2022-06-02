const express = require('express');

//-- Expess is a functoin that upon calling add methods to app variable
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side!',
    status: 'success',
  });
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

const port = 3000;
app.listen(port, () => {
  console.log(`🏢 App running on port ${port}`);
});
