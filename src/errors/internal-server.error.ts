import { ErroBase } from "./base.error";    

export class InternalServerError extends ErroBase {
    constructor(message = "Erro Interno do Servidor") {
        super(500, message);
    }
}