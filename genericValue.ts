function id <t>(value:t):t{
    return value;
}
const num=id <number>(5);
var p=id <string>("hello");
console.log(num);
console.log(p);
