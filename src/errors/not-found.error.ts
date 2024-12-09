import  { ErroBase } from "./base.error";

export class NotFoundError extends ErroBase {
    constructor(message: string) {
        super(404, message);
    }
}

