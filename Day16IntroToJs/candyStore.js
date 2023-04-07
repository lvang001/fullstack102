var sizeCandy = 'snack';
var nameCandy ='Darkest Cocoa';

switch (sizeCandy && nameCandy){
    case 'small' && 'Choco Chunks':
        console.log("This " + nameCandy + " cost $1.00");
        break;

    case 'large' && 'Crackle Crisps' : 
        console.log("This " + nameCandy + " cost $2.50");
        break;

    case 'jumbo' && 'All My Toffee' : 
        console.log("This " + nameCandy + " cost $4.75");
        break;
        
    case 'lArGe' && 'Mint Chip Supreme' :
        console.log("This " + nameCandy);
        break;
    
    case 'snack' && 'Darkest Cocoa' :
        console.log("This " + nameCandy);
        break;
    
    default : 
        console.log("Associate please look up price and check if valid");
}