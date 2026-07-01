import express from 'express';
import { userRouter } from './routes/usersRoutes.js';

const app = express()


const PORT = 3000;


app.use(express.json());
app.use(userRouter);


app.use((req, res, next) => {
    console.log("=================================");
    console.log(req.method, req.originalUrl);
    console.log(req.headers);
    next();
});


app.get("/health", (req:express.Request, res: express.Response)=>{
    res.json({"msg": "server running and healthy"})
});

app.get("/scim/users", (req:express.Request, res: express.Response)=>{

    const filter = req.query.filter;

    if (typeof filter !== "string") {
            return res.status(400).send("Invalid filter");
    }

    const match = filter.match(/^(\w+)\s+(eq|ne|co|sw|ew)\s+"(.+)"$/);
    console.log(match)

    if (!match) {
        console.log(!match)
        return res.status(400).send("Invalid filter");
        return
    }
    const [, attribute, operator, value] = match;

    console.log(attribute); // userName
    console.log(operator);  // eq
    console.log(value);     // alice@contoso.com

    res.status(200).json({
        schemas: [
            "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ],
        totalResults: 0,
        Resources: [],
        startIndex: 1,
        itemsPerPage: 0
    });

});

app.post("/scim/users", (req:express.Request, res: express.Response)=>{
    const body = req.body;
    console.log(body);
    console.log("====body====")
    res.sendStatus(201);
});


app.get("/scim/groups", (req:express.Request, res: express.Response)=>{
    res.status(200)
});


app.get('/scim/ServiceProviderConfig', (req:express.Request, res: express.Response)=>{

    console.log(req.method);
    console.log(req.originalUrl);
    console.log(req.headers.authorization);



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