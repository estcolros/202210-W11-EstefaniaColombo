export type FormPersonalType = {
    name: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    newsLetter: boolean;
};

export class Personal implements FormPersonalType {
    constructor(
        public name: string,
        public lastName: string,
        public birthDate: string,
        public gender: string,
        public email: string,
        public newsLetter: boolean
    ) {
        this.newsLetter = false;
    }
}
