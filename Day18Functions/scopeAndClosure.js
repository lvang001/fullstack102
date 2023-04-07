
function outer() {
     a = 'bill';
     b = {};
    console.log(a+b)

    function inner (a,b) {
        a='joe'
        b=8;

        return console.log(a + b);

    }
    inner(a,b);
}

outer();