
let n1=document.querySelector(".num1");
let n2=document.querySelector(".num2");

let body=document.querySelector("body") // to add the op onto html file

let add=document.querySelector(".a");
let sub=document.querySelector(".s"); 
let mult=document.querySelector(".m");
let div=document.querySelector(".d");
let rem=document.querySelector(".r");

add.addEventListener('click',()=>{
    let num1=n1.value;
    let num2=n2.value;
    console.log(num1)
    console.log(num2)
    let ans=(+num1) + (+num2)
    let op=document.createElement("h4")
    op.textContent= "THE SUM OF " + num1+ " and " + num2 + " is " +ans;
    op.style.color="white";
    body.append(op)
})


sub.addEventListener('click',()=>{
    let num1=n1.value;
    let num2=n2.value;
    console.log(num1)
    console.log(num2)
    let ans=(+num1) - (+num2)
    let op=document.createElement("h4")
    op.textContent= "THE DIFFERENCE OF " + num1+ " and " + num2 + " is " +ans;
    op.style.color="yellow";
    body.append(op)
})



mult.addEventListener('click',()=>{
    let num1=n1.value;
    let num2=n2.value;
    console.log(num1)
    console.log(num2)
    let ans=(+num1) * (+num2)
    let op=document.createElement("h4")
    op.textContent= "THE PRODUCT OF " + num1+ " and " + num2 + " is " +ans;
    op.style.color="red";
    body.append(op)
})




div.addEventListener('click',()=>{
    let num1=n1.value;
    let num2=n2.value;
    console.log(num1)
    console.log(num2)
    let ans=(+num1)/(+num2)
    let op=document.createElement("h4")
    op.textContent= "THE QUOTIENT OF " + num1+ " and " + num2 + " is " +ans;
    op.style.color="blue";
    body.append(op)
})



rem.addEventListener('click',()=>{
    let num1=n1.value;
    let num2=n2.value;
    console.log(num1)
    console.log(num2)
    let ans=(+num1) % (+num2)
    let op=document.createElement("h4")
    op.textContent= "THE REMAINDER OF " + num1+ " and " + num2 + " is " +ans;
    op.style.color="green";
    // op.style.backgroundColor="black"
    body.append(op)
})
