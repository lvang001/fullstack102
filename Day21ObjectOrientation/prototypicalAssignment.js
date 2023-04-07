class Person {

    constructor(firstName,lastName,favoriteColor, favoriteNumber, favoriteFoods =[], familyName=[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber= favoriteNumber;
        this.favoriteFoods = favoriteFoods;
        this.familyName = familyName;
    }
    getName(){
        return this.firstName;
    }   
}

Person.prototype.fullName = function () {
        console.log(this.firstName +" " + this.lastName);
}

Person.prototype.toString = function () {
    console.log(this.firstName + " " + this.lastName + "," + " Favorite Color: " + this.favoriteColor + "," + " Favorite Number: " + this.favoriteNumber)
}

Person.prototype.addToFamily = function (member) {
        if (this.familyName.includes(member)) {
            return console.log(this.familyName);
        }else {
            this.familyName.push(member);
        }
}

Person.prototype.addFavoriteFoods = function (food) {
    this.favoriteFoods.push(food)
}

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);

// console.log(peter)
// peter.fullName();
// peter.toString();
peter.addToFamily('hero');
peter.addToFamily('tee');
peter.addToFamily('tree');
console.log(peter);
peter.addToFamily('hero')
console.log(peter);
peter.addToFamily('tree')
peter.addToFamily('yes')
console.log(peter);
// console.log('tee');
// console.log(peter);
peter.addFavoriteFoods('rice');
peter.addFavoriteFoods(5);
console.log(peter);

