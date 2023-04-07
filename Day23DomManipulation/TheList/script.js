const addButton = document.getElementById('btnAdd');
const ItemToRemove = document.getElementsByTagName('li');
const addNew = document.createElement('li');
const list = document.querySelector('ul');

addButton.addEventListener('click', function(e){
    let addItem = document.getElementById('inputText').value;
    addNew.innerHTML = addItem;
    list.appendChild(addNew);
    document.getElementById('inputText').value = '';
    removeEventListener(addNew);
})

for(let i = 0; i < ItemToRemove.length; i++){
    removeEventListener(ItemToRemove[i]);
}

function removeEventListener(e) {
    e.addEventListener('click', function(e){
        e.target.style.textDecoration = 'line-through';
        setTimeout(()=> {e.target.remove()},1000);
    })
}