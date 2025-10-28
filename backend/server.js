const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from WriteBoost backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // επιτρέπει όλα τα domains προσωρινά
app.use(express.json());

app.get('/some-endpoint', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
