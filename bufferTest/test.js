// function func() {
//     return {
//         test:"abc"
//     };
// }

var func = function() {
  return {
    test:function() {
        alert(1);
    }
  };
};

function func1() {
    return {
        text:"abc"
    };
}

var a =func();
var b = func1();
console.log(typeof a.test);
console.log(typeof b);
