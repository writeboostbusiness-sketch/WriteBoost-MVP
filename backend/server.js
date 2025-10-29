// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // επιτρέπει όλα τα domains προσωρινά
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from WriteBoost backend!');
});

app.get('/some-endpoint', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
