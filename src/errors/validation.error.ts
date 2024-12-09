import { ErroBase } from "./base.error";    

export class ValidationError extends ErroBase {

    constructor(message: string) {
        super(400, message);
    }
}