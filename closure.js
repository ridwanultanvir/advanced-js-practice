function lorem()
{
    let count = 0;
    return function()
    {
        count++;
        return count;
    }
}

const clock1 = lorem();
// console.log(clock1);
let a = clock1();
console.log(a);
a = clock1();
console.log(a);
a = clock1();
console.log(a);
a = clock1();
console.log(a);

const clock2 = lorem();
a = clock2();
console.log(a);
a = clock2();
console.log(a);

a = clock1();
console.log(a);

a = clock2();
console.log(a);