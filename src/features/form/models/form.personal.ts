export type FormPersonalType = {
    name: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    newsLetter: boolean;
};

export class Personal implements FormPersonalType {
    newsLetter: boolean;
    constructor(
        public name: string,
        public lastName: string,
        public birthDate: string,
        public gender: string,
        public email: string
    ) {
        this.newsLetter = false;
    }
}
