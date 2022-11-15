// declaring variable
// ending a stmnt with ; isn't mandatoryyyyyy


var a;
console.log('value of a is ',a)
console.log('data type of a is ',typeof a)
//single n double quotes work as same dude

//typeof  --> returns data type of var
a=33;
console.log('value of a is ',a)
console.log('data type of a is ',typeof a)
//num for both
a=33.58;
console.log('value of a is ',a)
console.log('data type of a is ',typeof a)

//string
a="viper";
console.log('value of a is ',a)
console.log('data type of a is ',typeof a)

//boolean
a=true
console.log('value of a is ',a)
console.log('data type of a is ',typeof a);

const b=33;

console.log('value of a is ',b)
console.log('data type of b is ',typeof b)


//Operatorss...
var op,a1,b1;
a1=3
b1=4
op=a1+b1;
console.log("sum is : ",op)

op=a1-b1;
console.log("difference is : ",op)

op=a1/b1;
console.log("Quotient is : ",op)

op=a1%b1;
console.log("Remainder is : ",op)

op=a1*b1;
console.log("product is : ",op)



//Greatest of 3 statements ...
var n1,n2,n3;
n1=5;
n2=6;
n3=7;

if (n1 >= n2) {
    if (n1 >= n3)
        console.log(n1," is the largest number.");
    else
    console.log(n3," is the largest number.");
} else {
    if (n2 >= n3)
    console.log(n2," is the largest number.");
    else
    console.log(n3," is the largest number.");
}


// functions
let zap= function(a1,a2){
    return a1+a2;
}

console.log("The value of sum is ",zap(3,5));

function dif(d1,d2){
    console.log("diff is ",d1-d2);
}
dif(33,58)

let pd=a=>console.log("twice is ",2*a);

pd(33)