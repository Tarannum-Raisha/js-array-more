/**
 * *looping technique
 * 1. for loop 
 * 2. while loop
 * 3. do while loop --> ignore 
 * 4. for of ---> use in array 
 * 5, for in ---> use is object 
 * 
 */

const friends = [ 'ina', 'mina','rina','dika'];
for(const friend of friends){
    console.log(friend);
}

for(let i=0; i<friends.length ; i++){
    console.log(i);
    console.log(friends[i]);
}

let n= 0;
while( n< friends.length){
    console.log(friends[n]);
    n++;
}