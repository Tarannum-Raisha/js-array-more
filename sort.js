const persons = ['rakib', 'bakib', 'sakib', 'akib', 'Dalim'];
const sortedPerson = persons.sort();
console.log(sortedPerson);


// sort 
const numbers = [2, 4, 3, 1, 5, 8, 9];
console.log(numbers.sort());

/**
 * Ascending --> smaller to larger [1,2,3,4,5,8,9]
 * Descending --> larger to smaller [9,8,5,4,3,2,1]
 */

const num = [1, 35, 34, 324, 3, 5, 6];
const num_asc = [...num].sort(function(a,b){return a - b });
const num_dsc = [...num].sort(function(a,b){return b - a });

console.log(num_asc);
console.log(num_dsc);