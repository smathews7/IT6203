function displayMemberInformation(personObj: Person) {
    console.log(`<h1> ${ personObj.fname} (${personObj.email})</h1>`);

}
interface Person { 
    fname: string, 
    lname: string, 
    email: string
};
let groupMember : Person = { fname: "Jane", lname: "Doe"};

displayMemberInformation(groupMember);