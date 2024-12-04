interface Faculty {
    name : string,
    subject : string,
    experience : number,
    phone : number
}

interface Student {
    name : string,
    branch : string,
    section : string,
    semester : number
}

type user1 = Faculty | Student;

const user2 : user1 = {
    name : "Gowtham",
    branch : "CSE",
    section : "A",
    semester : 3
}

const user3 : user1 = {
    name : "Raj",
    subject : "Maths",
    experience : 5,
    phone : 1234567890
}


console.log(user2);
console.log(user3);