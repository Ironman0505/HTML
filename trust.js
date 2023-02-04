
//promise-1
let coding=true;
let crickPlay = new Promise((fulfilled,rejected) => {
     if(coding==true){
        setTimeout(() => {
            fulfilled(" Sry buddy....next time")
        },3000);
     } 
     else{
        setTimeout(() => {
            rejected(" Lets play  ")
        },3000);
     }

})
console.log(crickPlay)

crickPlay.then((yes)=>{ console.log("The news is :",yes)})
.catch((no)=>{ console.log("The news is :",no)})


// ie, until 3000msecs the promise is in pending state....once the time has come, it has fulfilled/rejected......


//promise-2

let release=false;
let RRR = new Promise((fulfilled,rejected) => {
     if(release==true){
        setTimeout(() => {
            fulfilled("RRR will be released on 7th JAN 2022..")
        },3000);
     } 
     else{
        setTimeout(() => {
            rejected("Sorry to all the fans...Movie will be postponed due to the increase of covid cases..")
        },3000);
     }

})
console.log(RRR)

RRR
.then((happy)=>{ console.log("There's a good news and it is :",happy)})
.catch((sad)=>{ console.log("There's a sad news and it is :",sad)})


//promise-3

let kindness=true;
let politician= new Promise((fulfilled,rejected) => {
     if(kindness==true){
        setTimeout(() => {
            fulfilled("All the promises made will be fulfilled and the society will be developed")
        },5000);
     } 
     else{
        setTimeout(() => {
            rejected("They do only corruption and are not developing the society..")
        },5000);
     }

})
console.log(politician)

politician
.then((gud)=>{ console.log("The good news is :",gud)})
.catch((bad)=>{ console.log("The sad news is :",bad)})


// my own promise
let willpwr=false;


// without timeouts... worksss
// let np=new Promise((f,r)=>{
//     if(willpwr==true)
//     f("I can do that!!!")
//     else
//     r("I am out of motivationnn")
// })

// with timeoutss
let np=new Promise((f,r)=>{
    if(willpwr==true){
    setTimeout(()=>{
    f("I can do that!!!")
    },5000)
    }
    else{
    setTimeout(()=>{
    r("I am out of motivationnn")
},5000)
    }
})

np
.then(ys=>console.log("The msg is ",ys))
.catch(nopes=>console.log("The msg is ",nopes))


// brand new promise...
let sayHi=()=>console.log("i am here")

let tmp=33;
let pr=new Promise((acc,rej)=>{
    if(tmp==33){
        acc( sayHi());
    }
    else{
        rej("Hey Assam");
    }
})

pr
.then(yes=>console.log(yes))
.catch(no=>console.log(no))