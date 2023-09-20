function sum( x, y){
    return x + y;
};

let mult=function( t, m){
   return t * m;
};

function calculate(sum, mult){
   if( sum > mult)
   return sum;
   else if (sum < mult)
   return mult;
}

calculate(sum(), mult());

function calculate(a, b){
    if( a > b)
    return a;
    else if (a < b)
    return b;
}
function sum(callback){
    let num = 6;
    callback(num)
}
function mult(callbac){
    let num1 = 2;
    callbac(num1)
}
calculate(sum(), mult());