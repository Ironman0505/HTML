

let a=[10,20,30,33,66,150,300,999]
// syntax of advanced methods
// array.method(cb function)


console.log("The base array is : ",a)

// filter
let zap=a.filter(ele=>ele>20)
console.log(zap)

// map
let zap2=a.map(ele=>ele*2)
console.log(zap2)

// forEach
// just takes 2 parameters value n index
ben=['Heat Blast','Four Arms','Grey Matter','Ghost Freak']
ben.forEach((value,index)=>{
    console.log("Alien at "+ index + " position is " + value); 
})

// reduce
// to find the sum
robo=['Hello World', " I'm",' Chitti,',' the robot,',' Speed 1Thz', ' Memory 1000TB']
let zap3=robo.reduce((ac,val)=>ac+val) // intially ac is a[0]
console.log(zap3) 

//find and find index
ar=['Hello',' Peter','Sandman',' Octopus']
let no_way_home=ar.find(spidy=>spidy=='Sandman')
console.log('peter',no_way_home)

let no=ar.find(spidy=>spidy=='Tobey')
console.log('peter',no)

let tom=ar.findIndex(zendaya=>zendaya==' Peter')
console.log(tom)


let rdj=ar.findIndex(zendaya=>zendaya=='Ironman')
console.log(rdj+" :(")



///practiceee
arr=[10,2,3,4,5,6]

let flt=arr.filter(ele=>ele!=4)
console.log("the filtered data is ", flt)

let mp=arr.map(ele=>ele*22)
console.log(mp)

let accm=arr.reduce((ac,val)=>{
    console.log(ac)
    return ac*val})
console.log(accm)


let fe=arr.forEach((ind,val)=>console.log("ind ",ind," val: ",val))
fe


//timer fns

setTimeout(()=>{
    console.log("Iam called buddy");
},3000)

setInterval(()=>{
    console.log("I am inevitable")
},2000)




// for(let i=0;i<1000000000000000000;i++)
// console.log()

console.log("hello")



fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>console.log(data))