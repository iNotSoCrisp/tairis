require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboard');
const aiRoutes = require('./routes/aiRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/ai', aiRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
