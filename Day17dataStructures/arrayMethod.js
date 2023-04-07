const arrNum = [5,25,20, 78];

//print to console call function getFirstValue
console.log(getFirstValue(arrNum));

console.log(incrementItems(arrNum));

console.log(rotate(arrNum));

//function to return first element
function getFirstValue (arr) {
    return arr[0];
}

//function to add one to each element 
function incrementItems (arry) {

   for (let i = 0; i < arry.length; i++) {
       arry [i]= arry[i]+1;
   }
   return arry;
}
//function to rotate element to the right one k is the for the amount of times to rotate
function rotate (ar) {
    for (let i = 0; i < ar.length -1; i++) {
        ar.unshift(ar.pop());
    }
    return ar;
}