// Line 1
var a = 0;
// Line 2
console.log(a,b,c,d,e,f,g);
function f(c) {
  // Line 3

  var b = 1;
  console.log(a,b,c,d,e,f,g);
  // Line 4
  function g(d) {
    // Line 5
    var e = 4;
    console.log(a,b,c,d,e,f,g);
    // Line 6
  }
  // Line 7
  console.log(a,b,c,d,e,f,g);
  return g;
  // Line 8
}
// Line 9
f(2)(3);
// Line 10
