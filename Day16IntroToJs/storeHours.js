var holiday = false;
var weekend = true;
var time = 14;

if (weekend || holiday === true) {
    console.log("Store is closed")
}else if (time > 18 || time < 8){
    console.log("Store is close")
}else {
    console.log("Store is opened")
}