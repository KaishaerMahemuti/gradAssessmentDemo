const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();
connectDB();