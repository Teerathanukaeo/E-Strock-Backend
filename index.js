const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// ตัวอย่าง API
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

// รับข้อมูลจาก Flutter
app.post('/submit', (req, res) => {
  console.log(req.body); // { name: "test", age: 20 }
  res.status(200).json({ status: "received" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
