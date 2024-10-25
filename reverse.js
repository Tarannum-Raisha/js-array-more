const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// // reverse
numbers.reverse();
console.log(numbers);

// // different type 
const reversed = numbers.reverse();
console.log(reversed);


// *********** for of **************


 const reverse = [];
for(const num of numbers){
   console.log(num);
    reverse.unshift(num);

}
console.log(reverse);

const unit = [23, 45, 45, 656, 577, 3446];
//************ */ normal for loop ********************

const reverse_number = [];
for(let n = 0; n<unit.length ; n++){
    reverse_number.unshift(unit[n]);
}
console.log(reverse_number);

// *************** for looping system reverse way****************


const newRevers = [13, 34, 35, 67, 789, 95, 55, 57, 77, 67]
const reverse_number_looping = [];
for(let i = newRevers.length - 1 ; i >= 0 ; i--){
    reverse_number_looping.push(newRevers[i]);
   
}
console.log(reverse_number_looping);