
//reverse function
function reverse (num) {
    reverse = Number(String(num).split('').reverse().join(''));
    return console.log(reverse);
}
reverse(123456)

//letters in alphabetic order
function sort (string) {
    let Array = string.split('');
    let sorted = Array.sort();
    return console.log(sorted.join(''));
}
sort('pseudophedrine')


// const str ="hello my friend";
// const words = str.split('');

//converts first letters to upper case
function capitalize (string) {
    let arrayOne =string.split(' ');
    let arrayNew = [];
    for (let i = 0; i < arrayOne.length; i++) {
        arrayNew.push(arrayOne[i].charAt(0).toUpperCase()+arrayOne[i].slice(1))
    }
  console.log(arrayNew.join(' '));
}
capitalize("the cat in the hat")

//check if given number is a prime number
function isPrime (num) {
    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log('is not a prime');
        }else {
            return console.log('is a prime');
        }
    }
}
isPrime(13)
isPrime(14)

//extracts unique characters from a string
function unique (string) {
    let uniq ='';
    for(let i = 0; i < string.length; i++) {
        if(uniq.includes(string[i]) === false) {
            uniq+=string[i];
        }
    }
    return console.log(uniq);
}
unique('thequickbrownfoxjumpsoverthelazydog')

//bubbleSort
function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <(array.length -i - 1); j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return (console.log(array))
}
let arrOne = [243,453,34,2,434,543]
bubbleSort(arrOne)