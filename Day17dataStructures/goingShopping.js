const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa' , 'coffee']

//empty array
const shoppingCart = [];


//original array list
console.log(shoppingList);

shoppingList.push('fruit loops');

//after adding 'fruit loops' to shoppingList
console.log(shoppingList);

//replace 'coffee' with 'fair trade coffee'
shoppingList.splice(4, 1,'fair trade coffee');
console.log(shoppingList);

//replace 'chips'& 'salsa' with 'rice' and 'beans'
shoppingList.splice(2,1, 'rice');
shoppingList.splice(3,1, 'beans');
console.log(shoppingList);

//remove last item shopping list add to shopping cart
let item = shoppingList.pop();
console.log('shopping list after removing last item')
console.log(shoppingList);
shoppingCart.push(item);
console.log('shopping cart after adding item to cart');
console.log(shoppingCart);

//remove first item from shopping list and add it to shoppingCart
let itemTwo = shoppingList.shift();
console.log('shopping list after removing first item')
console.log(shoppingList);
shoppingCart.push(itemTwo);
console.log('shopping cart after adding item to cart')
console.log(shoppingCart);

//loop to remove items from shopping list to shopping shoppingCart
// for(let i = shoppingList.length - 1; i >= 0; i--){
//  let itemThree= shoppingList.splice(i,1);
//   shoppingCart.push(itemThree);
// }
// console.log('shopping list after removing items')
// console.log(shoppingList);

while(i = shoppingList.length-1 >= 0) {
  let itemThree = shoppingList.splice(i,1);
  shoppingCart.push(itemThree);
  i--;
}
console.log('shopping list after removing items')
console.log(shoppingList);

console.log('shopping cart after adding item to cart');
console.log(shoppingCart);



//sort array alphabetically
console.log('array alphabetically')
console.log(shoppingCart.sort());

//sort array backwards
console.log('reverse')
console.log(shoppingCart.reverse());


//list shopping cart to console in comma separated string
console.log(shoppingCart.toString());

