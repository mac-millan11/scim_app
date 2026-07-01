import express from 'express';
import { userRouter } from './routes/usersRoutes.js';

const app = express()

const PORT = 3000;


app.use(userRouter);


app.get("/health", (req:express.Request, res: express.Response)=>{
    res.json({"msg": "server running and healthy"})
});


app.get('/scim/ServiceProviderConfig', (req:express.Request, res: express.Response)=>{

    const token = req.header
    console.log(token)

    res.status(200).json({
        "schemas": [
            "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"
        ],
        "patch": {
            "supported": true
        },
        "filter": {
            "supported": true
        }
        }
    )
})





app.listen(PORT, ()=>{

    console.log(`server running port ${PORT}`)
})