//  let arr1 = ['one', 'two'];

// let arr2 = [arr1, 'three', 'four', 'five'];

// let arr3 = [...arr1, 'three', 'four', 'five'];

// console.log(arr3);
// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(x => x * 3);
// console.log(map1);
// let age = 2;
// function changeAge () {
//   age = 6;
//   return age;
// }
// console.log(changeAge());
// const obj = { foo: 1 };
// obj.bar = 2;
// console.log(obj.foo);
// function sayAnotherThing() {
//     console.log('What does the fox say?');
//   }
  
//   console.log(sayAnotherThing());
// function truthOrFalsy(myParameter) {
//     if (myParameter) {
//       console.log('Truthy');
//     } else {
//       console.log('Falsy');
//     }
//   }
  
//   truthOrFalsy(0);
// var weekend = false;
// var holiday = !true;
// var time = 15; 

// function timeCheck(holiday, weekend, time) { 
//     if (holiday == true || weekend == true) {
//         console.log("closed"); 
//     } else if (8 < time && time < 18) { 
//         console.log("open"); 
//     } else {
//         console.log("closed"); 
//     }
// } 

// timeCheck(holiday, weekend, time);
// (function() {
//     if (false) {
//         let f = { g() => 1 };
//     }
//   return typeof f;
// })();
// (function() {
//     if (false) {
//         let f = { g() => 1 };
//     }
//   return typeof f;
// (function () {
//     let f = this ? class g {} : class h {};
//     return [typeof f, typeof h];
// }
// function saySomethingElse() {
//     console.log(8 < 9);
//   }
  
weather = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
}  

console.log(weather.weather[0].description)