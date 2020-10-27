let x = prompt ('x?');
let n = prompt ('n?');
function pow (num1, num2) {
  return num1 * num2;
}
console.log(Math.pow( x , n));

 //какой из них будет правильный?))))

let x = prompt ('x?');
let n = prompt ('n?');
function pow (х, n) {
if (x<1){
  return alert('Введите число больше 0');
}else{
  return  x ** n;
}
}
console.log (pow(x,n))