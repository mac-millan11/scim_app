import express from 'express';
import { userRouter } from './routes/usersRoutes.js';

const app = express()

const PORT = 3000;


app.use(userRouter);


app.get("/health", (req:express.Request, res: express.Response)=>{
    res.json({"msg": "server running and healthy"})
});





app.listen(PORT, ()=>{

    console.log(`server running port ${PORT}`)
})