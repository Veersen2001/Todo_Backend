import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import router from "./routes/TodoRoute.js";



dotenv.config();
const app = express();
const PORT = process.env.port||8000;
app.use(express.json());
app.use(cors());


app.get('/ping', (_req, res) => {
  res.send('Pong');
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  console.log('connected to mongoDB')
}).catch((error)=>{
  console.log(error);
})


app.use(router);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})