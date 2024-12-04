interface User {
    name : string,
    age : number
}

function sumOfages(user1 : User , user2 : User){
    return user1.age + user2.age;
}


const x : number = sumOfages(
    {name : "Gowtham" , age : 20},
    {name : "Raj" , age : 19}
)

console.log(x);