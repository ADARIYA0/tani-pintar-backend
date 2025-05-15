const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
