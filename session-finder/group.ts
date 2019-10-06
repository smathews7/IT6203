export interface MemberObject {
    FirstName: string;
    LastName: string;
    Email: string;
}

declare module namespace {

    export interface Id {
        $oid: string;
    }

    export interface RootObject {
        _id: Id;
        Firstname: string;
        Lastname: string;
        Email: string;
    }

}