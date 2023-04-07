

//update the 'Apples' item to say 'Granny Smith Apples'
const update = document.getElementById('list');
let item = document.createElement('li');
item.textContent = 'Granny Smith Apple';

update.replaceChild(item, update.children[1]);

// console.log(update);

//remove 'Oat Milk' from the list
update.removeChild(update.children[3]);

//Add an item 'Kombucha';added to elment 1
let item2 = document.createElement('li');
item2.textContent ='Kombucha';
update.insertBefore(item2, update.children[1])


//clear the list and programmatically add items from the array
// clears the list
// for(let i=0; i<update.children.length; i++) {
//     update.remove(update.children[i]);
// }
Array.from(update.children).forEach(item => {
    item.remove()
})
const arr = ['protein bars', 'almonds', 'peanut butter'];


for(let i=0; i<arr.length; i++) {
    update.insertAdjacentHTML('beforeend',`<li>${arr[i]}</li>`);
}

//add the class 'important' to the almonds item list
update.children[1].className += ' important';


