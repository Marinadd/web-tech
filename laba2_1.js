var a = {};
var b = {"qwe":"123", "asd":"456", "zxc":"789"};

function isEmpty(obj){
  for (var key in obj) {
    return false;
  }
  return true;
}

console.log("empty")
console.log(isEmpty(a))

console.log("full")
console.log(isEmpty(b));
