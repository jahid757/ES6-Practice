const ages = [10,12,14,19,17];
const ages2 = [13,14,16,17,10];


// const allAges = ages.concat(ages2);
const allAges = [...ages,"string here", 15,22,...ages2]
console.log(allAges);  


const business = 450;
const banker = 200;
const developer = 560;

console.log(Math.max(business,banker,developer));

const higher = [190,507,868,980,677];

// console.log(Math.max(higher));

console.log(Math.max(...higher));