import type {Request, Response} from 'express';



export async function getUsers_all(req: Request, res:Response) {
    
}


export async function getUser_id(req: Request, res:Response) {
    const userId = req.params.id;
    
}

export async function createUser(req: Request, res:Response) {
    const userName = req.body.userName
    const displayName = req.body.displayName
    const active = req.body.active

    res.status(201).json({
        id: "1",
        userName: userName,
        displayName: displayName,
        active: active
    })

}