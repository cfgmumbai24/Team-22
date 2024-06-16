import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.js';
import dashboardRouter from './routes/dashboard.route.js';
import profileRouter from './routes/profile.route.js';


// Config details
const PORT = config.PORT;
const URI = config.URI;


// Server initialization
const server = express();


// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


// Routes
server.use('/dashboard', dashboardRouter);
server.use('/profile', profileRouter);


// Database connection
mongoose
   .connect(URI)
   .then(() => {
      console.log(' Database Connected.');
      server.listen(PORT, () => {
         console.log(` Server listening to port ${PORT}`);
      }).on('error', (err) => {
         console.log(' Error starting server: ', err);
      });
   }).catch((error) => {
      console.log(' Error connecting to Database.', error);
   });