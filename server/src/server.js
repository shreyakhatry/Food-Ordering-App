import express from "express";
import cors from "cors";
import {fileURLToPath} from "url";
import path, {dirname} from "path";
import foodRouter from '../src/routers/router.js';

const app = express();
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000'],
    })
);

const __filename=fileURLToPath(import.meta.url);
const __dirname= dirname(__filename);

app.use('/api/foods',foodRouter);

const publicFolder = path.join(__dirname,'public');
app.use(express.static(publicFolder));

app.get('*',(req,res)=>{
    const indexFilePath = path.join(publicFolder,'index.html');
    res.sendFile(indexFilePath);
})
const port=8000;
app.listen(port,()=>{
    console.log('listening on port'+ port);
})

