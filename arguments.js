function add(num1, num2)
{
    return num1+num2;
}

console.log(add(2,5));
console.log(add(2,5,7));

function add_nums()
{
    // console.log(arguments[0]);  // accessible
    // console.log(arguments.length);  // ok
    const arr = [...arguments];
    return arr.reduce(function(total,item){
        return total + item;
    })
    
    
}

console.log(add_nums(2,4,6,3,5));