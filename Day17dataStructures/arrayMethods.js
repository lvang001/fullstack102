const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];


// console.log('This name with Jose '+users.find(user=> user.firstName == 'Jose'));
// console.log('These are premium members ' + users.filter(users=> users.isPremiumMember));
// console.log(users.map(users=> users.lastName));
//  var userGreaterThanTen= ((users.filter(users=> users.logins >10)))
//  var userNameWithGreaterThanTen = userGreaterThanTen.map((users)=>users.firstName + ' ' + users.lastName)
// // console.log(userGreaterThanTen)
// console.log(userNameWithGreaterThanTen)
var total = users.map(users=>users.logins)

console(users.find(users.id))



// var logins = users.map(users => users.logins)
// const totalNum = logins.reduce((logins,total) => {
//     return total + logins;
// })

// console.log(totalNum)

var idNum = users.map(users => users.id)
var idTotal = idNum.reduce((total, num)=> {
    return total + num;
},0)

console.log(idTotal)


// var total = users.reduce((total,login) => {
//     return total + users.logins
// },0)

// console.log(total)