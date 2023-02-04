
//usage of rest parameter

function great(...par){
let max=0;
for(var val=0;val<par.length;val++){
    if(par[max]<par[val])
    max=val;
}

console.log("The greatest number among the passed values is "+par[max]);
}

great(10,20,30)
great(33,66,139489,1,45,-9)
great(0,0.9,34,-5,-78,-4,67,2.6)

//merging of the objects

let avenger1={
    id:1,
    name:'Ironman',
    weapon:'AI'
}

let avenger2={
    id:2,
    name:'Captian America',
    weapon:'Shield'
}

let avenger3={
    id:3,
    name:'Hulk',
    weapon:'Rage'
}
let assemble={...avenger1,...avenger2,...avenger3}
console.log(assemble)

// if the key values are same, then the latest added object values are being displayed.. :)
 


//rest && spread syntaxx    REPLIT
let zap=function(x,...y){
  let sm=y.reduce((ac,val)=>ac+val);
  console.log(sm);
}


zap(10,20,30,40)

let ar=[10,20,30,40]
let br=[50,60,70]
let cr=[...ar,...br]
let dr=[ar,br]
console.log(cr)
console.log(dr)


let o1={
  name:"kows",
  roll:33,
  age:18,
  alien:false
}
let o2={
  name:"ben",
  roll:10,
  age:12
}
let o={...o1,...o2}
console.log(o)









// rest params

function fn(a,b,...c){
    let sm=a+b;
    for(ele of c)
    sm+=ele;
    return sm;
}

console.log("value is ",fn(3,5,10,2))