
//1 get the header element
const header = document.getElementsByTagName('header');
console.log(header);

//2 get all the sections
const section = document.getElementsByTagName('section');
console.log(section);

//3 get the section element with class ='current'
const sectionCurrent = document.getElementsByClassName('current');
console.log(sectionCurrent);

//4 get the section that comes after the current sectionCurrent
const current = document.querySelector('.current');
const nextSection = current.nextElementSibling;
console.log(nextSection);

//5 Get the h2 node from the section before the current section
const h2Node = current.previousElementSibling;
console.log(h2Node);
const h2Parent = h2Node.parentNode;
console.log(h2Parent);

//6 get t he div that contains the section that has an h2 with a class of 'highlight'
// const div = document.getElementsByTagName('div');
// const withHighlight = div.nextElementSibling();
// console.log(withHighlight);
const div = document.querySelector('.highlight').parentElement.parentElement;
// const added = div.doucment.parentElement.parentElement;
// console.log(add);

//7 Get all the sections that conatians an H2
// const allH2 = document.querySelectorAll('h2');
// console.log(allH2);

// const arr = Array.from(allH2)
// console.log(arr)
const h2WithSection = Array.from(document.querySelectorAll('h2')).map((section) => section.parentElement);
console.log(h2WithSection)
