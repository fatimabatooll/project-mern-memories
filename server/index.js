// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from 'cors';

// import postRoutes from './routes/posts.js'

// const app = express();
// app.use(cors({ origin: '*' }));


// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://mernmemories:mernmemories123@cluster0.gmbii6b.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 4000;

// mongoose.connect(CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();
app.use(cors({ origin: '*' }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 4000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
