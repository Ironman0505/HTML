

// timer fns
console.log("Hello Momozzz")
setTimeout(()=>{
console.log("I'll be waiting for you viper")
},3300)
setTimeout(()=>{
    console.log("Let's Eat food first before discussion")
},4000)
setInterval(()=>{
    console.log("Hey Tin papaa")
},2500)



// Promises
// fulfilled n rejected are keywordsss

let tp_present=true;
let ph= new Promise((fulfilled,rejected)=>{
if(tp_present==true){
setTimeout(()=>{
    fulfilled("Tin papa untadiii phenoms thooooo")
},2500)
}
else{
    setTimeout(()=>{
        rejected("Tin papa tho phenoms mallla godavaaa")
    },2500)
}
})
console.log(ph)
ph
.then((happy)=>{console.log("GOOD NEWS!!!   ",happy)})
.catch((sad)=>{console.log("SAD NEWS...   ",sad)})


.then(function (happy){console.log("GOOD NEWS!!!   ",happy)})// => even this statement works,
// callback mei arrow fn use karenge , just to make easy .. but normal fn bhi use kar sakthe hai


//API CALLS
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))