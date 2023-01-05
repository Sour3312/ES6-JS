//annonymous function

function close(a) {
  // console.log("a: ", a);

  var c = 23;
  return function (b) {      //annonymous func.
    // console.log("b: ", b);
    return a + b + c;
  };
}
var sm = close(1);
// console.log(sm(11));

// ###################################

var sum = function (x) {
  // console.log("x=", x);

  return (y) => {            //annonymous func.
    // console.log("y=", y);

    return x * y;
  };
};
var callsum = sum(11); //x=11
var callInnerFunction = callsum(13); //y=13 caling innerfunction
// console.log(callInnerFunction);

// ###################################
// we can return multiple functions within function

const Multi = (x, y, z) => {
  // console.log(x + y + z);
  return {
    funcOne: function () {
      return x + y;
    },
    funcTwo: function () {
      return y + z;
    },
    funcThree: function () {
      return z + x;
    },
  };
};
var All = Multi(1, 2, 3);
// console.log(All.funcOne());//calling innerfunc.
// console.log(All.funcTwo());
// console.log(All.funcThree());

// ################################### /another example of closure/ ###################################
function a(a){
  return function b(b){
    return function c(c){
      return a+b+c
    }
  }
}

let x=a(11)
// console.log(x);

let y=x(12)
// console.log(y);

let z=y(13)
// console.log(z);