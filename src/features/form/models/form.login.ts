export type FormLoginType = {
    userName: string;
    password: string;
};
export class Login implements FormLoginType {
    constructor(public userName: string, public password: string) {}
}
