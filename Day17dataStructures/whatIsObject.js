let user = {
    name: 'John Doe',

    contacts: ['Matt','Julian', 'Erin'],

    email: ['john@doe.com','john2@doe.com'],

    Gmail: {
        inbox: 'good news, you could earn 100k',
        junk: 'this is junk',
        sent: 'this was sent',
    }    
}
//display inbox
console.log(user.Gmail.inbox);
//dispplay contact in the 2nd position in the array
console.log(user.contacts[1]);
//display name
console.log(user.name);
//change user name 
user.name ='Lucy Doe';
//show the change of the name
console.log(user.name);
//add text to the inbox
user.Gmail.inbox ='some more spam...';
console.log(user.Gmail.inbox);
//remove 2nd element from the contact list
delete user.contacts[1];

console.log(user.contacts);
console.log(user.contacts[0]);