interface Users  {
    name : string,
    age : number,
    email : string,
    phone : number,
    userId : number,
    password : string
}

type AccessUser = Pick<Users , "name" | "userId" | "email">;

function displayUser(user : AccessUser){
    console.log(`user name is ${user.name} and user id is ${user.userId} and email is ${user.email} `);
}