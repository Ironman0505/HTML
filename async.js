// console.log("hellooo")

// let students=['Cap','Rdj','Maxi']

// function addstd(std){
//     setTimeout(() => {
//         students.push(std);
//         console.log("Added a new buddy ");
//     }, 4000);

// }

// function prntstd(){
//     setTimeout(() => {
//         students.forEach((val,id)=>console.log("The student is  "+val));
//     }, 2000);
// }

// let nad='Hitman';
// addstd(nad);
// prntstd();   

// here hitman gets added...but print hothe samai nahi hoga...due to time variations
// hence u can use callback by which... u can forcefully stop the prntstd until hitman is added successfully

//REPLICA

let students=['Cap','Rdj','Maxi']

function addstd(std,callback){
    setTimeout(() => {
        students.push(std);
        console.log("Added a new buddy ");
        callback();
    }, 3000);

}

function prntstd(){
    setTimeout(() => {
        students.forEach((val,id)=>console.log("The student is  "+val));
    }, 1000);
}

let nad='Hitman';
addstd(nad,prntstd);

// Now hitman will be added and then printing is done

// Promisesssssss
let pr1=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
            resolve("hello");
    },2000)
})

pr1.then(val);