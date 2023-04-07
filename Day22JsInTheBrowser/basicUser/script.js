const storeOwners = [{
        charles: 1
    },
    {
        sally: 1
    },
    {
        cassandra: 1
    },
    {
        'Danny Shavez': 1,
        location: "in NM",
    },
];

// for(let i = 0; i<storeOwners.length;i++) {
//     if (storeOwners[i])
// }

// let locations = listNumberOfStores;
// consolelog(locations)

const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
        let totalLocations = totalLocations + i;
    }
    return i;
};
// console.log(storeOwners)
let locations = listNumberOfStores;

function tellMeMyStores() {
    console.log("Hey, can you tell me how many stores you have?");
    if (locations > 0) {
        console.log("Of course, we have " + totalLocations + " stores");
    }
}
// tellMeMyStores()
// console.log(tellMeMyStores())

function hasStore() {
    for (let i = 0; i < storeOwners.length - 1; i++) {
        people = storeOwners[i];
        let person = Object.keys(people);
        console.log("Yes, " + person + " has one");
    }
}

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
let mister = man[0];

// let whereHeLives = mister.location;
// console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");