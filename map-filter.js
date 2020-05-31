const nums = [2,5,3,7,6];
let sqr = []

function square(e){
    return e*e;
}

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    sqr.push(element*element);
}

console.log(sqr);


sqr = nums.map(square);
console.log(sqr);

sqr = nums.map(function(element, index, array){
    console.log(element, index, array);
    return element*element;
})
console.log(sqr);

const square_func = x => x*x;
sqr = nums.map(square_func);
console.log(sqr);

sqr = nums.map(x => x*x)
console.log(sqr);

console.log("for each");
nums.forEach(function(element, index, array){
    console.log(element, index, array);
}); // doesn't return anything

let sum = nums.reduce(function(total,element){
    return total + element;
},5); // initial value of total = 5

console.log("sum:",sum);

sum = nums.reduce(function(total,element){
    console.log("total:",total);
    return total + element;
},0);  // initial value of total = 0

console.log("sum:",sum);

sum = nums.reduce(function(total,element){
    console.log("total:",total);
    return total + element;
});  // same as above

console.log("sum:",sum);


let filtered = nums.filter(x => x>5);
console.log(filtered);

filtered = nums.filter(x => x<2);
console.log(filtered);

let find = nums.find(x => x<2);
console.log(find);

find = nums.find(x => x>2);
console.log(find);