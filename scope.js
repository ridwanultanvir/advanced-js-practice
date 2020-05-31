let bonus = 4;  // global scope

function sum(a,b)
{
    const res = a+b;
    console.log(bonus);
    if(res > 9)
    {
        var msg = "happy";
        let msg2 = "check";
    }
    console.log(msg); // not visible outside function
    // console.log(msg2);  // undefined
    var note = "song";  // not visible outside function

    return res;
}

console.log(sum(2,8));

// console.log(note);
// console.log(msg);

