import { ErroBase } from "./base.error";

export class EmailAlreadyExistsError extends ErroBase {

    constructor (message = "O email informado já está em uso por outra conta") {
        super(409, message);
    }
}