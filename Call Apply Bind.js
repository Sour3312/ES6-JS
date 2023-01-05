// call()

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   myFunc:function(){
//     // console.log('1');
//     // console.log(this);
//     console.log(this.firstName);
//   }
// };
// let person1 = {
//   firstName: "daddy",
//   lastName: "Doeu",
//   age: 520,
//   eyeColor: "bluewer",
//   myFunc:function(){
//     // console.log('2');
//     // console.log(this);
//     console.log(this.firstName);
//   }
// };
// person.myFunc()
// person1.myFunc()
//here  we need to call firstname individually so we can use call() method

// #####################

// let person = {
//   firstName: "John",
//   lastName: "Doe",

//   myFunc: function () {
//     console.log(this.lastName);
//   },
// };
// let person1 = {
//   firstName: "daddy",
//   lastName: "Doeu",

// };

// person.myFunc()
// person.myFunc.call(person1); //function borrowing

// #####################
//if function is out of the object

let person1 = {
  firstName: "daddy",
  lastName: "Doeu",
};

let person = {
  firstName: "John",
  lastName: "Doe",
};

var CallFunc = function (x, y, z) {
  console.log(this.firstName, x, y, z);
};

//function borrowing
//call()
CallFunc.call(person, "india", "delhi");
CallFunc.call(person1, "india", "delhi"); //passing values indivudally

//apply()
CallFunc.apply(person1, ["india", "delhi", "aasa"]); //passing values as arraylist
CallFunc.apply(person, ["usa", "ghundi", "vcgfd"]); //passing values as arraylist

// bind()
// same like call() but just need to store function in a variable for later use cases

var neww = CallFunc.bind(person, "india", "delhi");
neww()
console.log(neww);
