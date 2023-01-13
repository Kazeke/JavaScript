let key = 'six';

let nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    [key]:6
};

console.log(nums);

delete nums.four; //удаление

console.log('six' in nums);