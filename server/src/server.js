import express from "express";
import cors from "cors";
import foodRouter from '../src/routers/router.js';

const app = express();
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods',foodRouter);

const port=8000;
app.listen(port,()=>{
    console.log('listening on port'+ port);
})

