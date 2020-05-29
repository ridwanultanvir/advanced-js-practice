function conditions(name)
{
    if(name)console.log("true");
    else console.log("false");
}


let name;
console.log(name);

conditions(name);
name = undefined;
conditions(name);

name = null;
conditions(name);

name = 0;
conditions(name);

name = "";
conditions(name);

name = false;
conditions(name);

name = []
conditions(name);

name = {}
conditions(name);