function readNumber() {

let value = prompt('Введите число:', '');

if (isFinite(value)) {
if (value === null ||
value === "") {
return null;
}
return +value;
}
else {
return readNumber();
}
}

console.log(readNumber());