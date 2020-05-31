const nums = [2,5,3,6,1,8,7]
console.log(nums.slice(3,6));

const removed = nums.splice(3,2,4,9,2);
console.log(removed);
console.log(nums);

let joined = nums.join("");
console.log(joined);

joined = nums.join(",");
console.log(joined);

joined = nums.join(" ");
console.log(joined);