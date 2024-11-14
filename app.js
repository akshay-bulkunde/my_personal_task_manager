const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config.js');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = config.server || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
