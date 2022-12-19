export type FormAccessType = {
    userName: string;
    password: string;
    repeatPassword: string;
    accountType: string;
};

export class Access implements FormAccessType {
    constructor(
        public userName: string,
        public password: string,
        public repeatPassword: string,
        public accountType: string
    ) {}
}
