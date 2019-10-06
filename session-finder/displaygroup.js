function displayMemberInformation(personObj) {
    console.log("<h1> " + personObj.fname + " " + personObj.lname + " (" + personObj.email + ")</h1>");
}
;
var groupMember = { fname: "Jane", lname: "Doe", email: "jane.doe@email.com" };
displayMemberInformation(groupMember);
