//    const ADMIN = 0;
//    const READ_ONLY = 1;
//    const AUTHOR = 2;   

enum Role {
   ADMIN='Admin', READ_USER = 100, AUTHOR = 1000
};
   
   const person:{
       name: string;
       age: number;
       hobbies: string[];
    //    role: [number, string];
       role: Role;
   } = {
    name: 'Maximilian',
    age : 30,
    hobbies: ['Sports', "Cocking"],//array
    // role: [0, 'admin']//tuples
    role: Role.AUTHOR,// enum type
};

// person.role.push('admin'); // alowwed
//    person.role = [0 , 'admin', 'user']; // not allowed

// person.role[1] = 10; // not allowed


let favoritActivities: string[];
 favoritActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! Error!!!!
}

if ( person.role === Role.AUTHOR){
    console.log("is author");
}