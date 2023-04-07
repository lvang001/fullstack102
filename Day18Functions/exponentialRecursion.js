
const exponent = function(a, n) {
    if (n !== 0) {
        return a * exponent(a, n-1)
        }else {
        return 1;
        }
}
console.log(exponent(4, 6));

let exp =6;
let num =4;

let ans =1;

//loop for exponent and prints out each iteration
for(let i = 0; i < exp ; i++) {
    ans=ans*num; 
    console.log(ans);
}
