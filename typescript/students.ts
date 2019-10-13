export interface StudentObject {
    firstName: string;
    lastName: string;
}

declare module namespace {

    export interface RootObject {
        firstName: string;
        lastName: string;
    }

}