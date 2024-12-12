import express, {Request, Response, NextFunction} from "express";
import { InternalServerError } from "../errors/internal-server.error";
import { errors } from "celebrate";
import { ErroBase } from "../errors/base.error";

export const erroHandler = (app: express.Express) => {
    app.use(errors());
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        if (error instanceof ErroBase) {
            error.send(res);
        } else {
            new InternalServerError().send(res);
        }
        
    });

};