let arr = [5,10,7,16,19];
let multipliedarray = arr.map( num => num * 3);
console.log('Array before multipy :', arr);
console.log('Array after multipy :', multipliedarray);


const age = [10,20,17,25,14,18,19];
const major = age.filter(item => item >= 18);
console.log('age which is Major :', major);

const voteEligible = age.forEach( (age) => {
    if(age >= 18) console.log(`Age ${age} is eligile for voting`);
    else console.log(`Age ${age} is not eligible for voting`);
})