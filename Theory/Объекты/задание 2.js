let schedule = {};

function isEmpty(obj) {
    for(let key in obj)
    {
        return true;
    }
    return false;
}
console.log (isEmpty(schedule))

schedule["8:30"] = "get up";

console.log (isEmpty(schedule)) 