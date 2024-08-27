// For

const array = ["a", "b", "c", "d", "e", "f", "g"];

console.log("for");

for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
}

// array[0]
// array[1]
// array[2]
// array[3]
// array[4]
// array[5]
// array[6]
// array[7]

// For of -> array

console.log("for of");

for (const item of array) {
  //   console.log(item);
}

// For in -> Objetos

console.log("for in");

// {"key": "value"}

const user = { name: "david", age: 23, job: "developer" };

user.name; // "david"
user["name"]; // "david"

for (const key in user) {
  //user["name"]
  //user["age"]
  //user["job"]
  //   console.log(user[key]);
}

// david
// 23
// developer

console.log("array y objeto");

const users = [
  { name: "david", age: 23, job: "developer" },
  { name: "jorge", age: 18, job: "ingeniero" },
  { name: "yaneth", age: 16, job: "developer" },
];

for (let i = 0; i < users.length; i++) {
  //   console.log(users[i].name);

  users[0]; // { name: "david", age: 23, job: "developer" }
  users[1]; // { name: "yaneth", age: 16, job: "developer" }

  for (const key in users[i]) {
    // if (users[i].job === "ingeniero") {
    //   console.log(users[i][key]);
    // }

    if (users[i].age >= 18) {
      console.log(users[i][key]);
    }
  }
}

// for (const key in user) {
//     console.log(user[key]);
//   }

// david
// yaneth
