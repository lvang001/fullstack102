// const btnAdd = document.getElementById('toAdd');
// const itemRemove = document.getElementbyTagName('li')

// // function clickOn (item){
// //     return list.(item)
// // }

// btnAdd.addEventListener('click', function(e) {
//     itemToAdd.innerHTML = btnAdd;
//     let itemList = document.getElementById('list');
//     let itemToAdd = document.getElementById('inputAdd').value;

//     itemList.appendChild(itemToAdd);
//     removeEventListener(itemToAdd);
    
// })
const addButton = document.getElementById('addButton');
addButton.addEventListener('click' , function(event){
    let addItem = document.getElementById('addItem').value;
    const addNewItem = document.createElement('li');
    addNewItem.innerHTML = addItem;
    const list = document.querySelector('ul');
    list.appendChild(addNewItem);
    document.getElementById('addItem').value = '';

    removeEventListener(addNewItem);
})
// function removeItem (item) {
//     for (let i = 0; i <itemTo.length; i++) {}
// }

// function removeEventListener(e) {
//     e.addEventListener('click', function(e) {
//         event.target.classList.add('line');
//         setTimeout(function() {event.target.remove()}, 1000)
//     })
// }
