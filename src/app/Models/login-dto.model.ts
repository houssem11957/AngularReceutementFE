export interface LoginDTO {
}

export class LoginModel{
    constructor(public Email:string,public Password:string){};
    email:string;
    password:string;
}