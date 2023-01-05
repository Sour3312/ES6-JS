//rest opreater
// rest always return array
function a(a, b, c, ...rest) {
  console.log(rest); // values not in use es6
  console.log(a + b + c);
}
a(1, 2, 3, 4, 5, 67, 1);

function b(a, b, c) {
  console.log(arguments); //ES5 prints all the values as array
  console.log(a + b + c); //
}
b(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//spread

let arr = [1, 2, 3, 44, 4, 5, 4, 6, 6, 6];
function c(no1, no2, no3) {
  console.log(no1, no2, no3);
  console.log(arr); //returns array
  console.log(...arr);//spread
  console.log(arguments);
}
c(arr[0], arr[1], arr[2]);


// ############################# with object #####################################
//destrustring 
// # rest with object #

var objj={
    name:"bdft",
    age:23,
    list:[1,2,3,4,]
}

var {name,...rest}=objj;
console.log(name);
console.log(rest);

// # rest with aarray #

var arr1=[1,2,3,4,5]
var [a,b,...rest]=arr1
console.log(a,b);
console.log(rest);

// # spread with object overide #

var obj1={
        name:"bdft",
        age:23,
        list:[1,2,3,4,]
    }
    var newObj={...obj1,age:1222} //can apply any cahnges 
    console.log(newObj);
    console.log(obj1);

// # spread with array overide #

let sprd=[1,2,3,4,5]

let fg=[...sprd]
let fg1=[...sprd,234]
console.log(fg,fg1);
