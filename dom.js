// access elements 

// let body = document.querySelector("body")
let para = document.querySelector(".para")
// or
// let para = document.getElementById("para")   
//only when id is given....
console.log(para)
para.textContent="The data is modified mateee" //dynamic data addition

let h=document.querySelector("h3")
h.textContent="That's viper touch"

let abc = document.querySelector(".clk")
let btn=document.querySelector(".btn")

//adding events through button pressing
btn.addEventListener('click',()=>{
    console.log("Avenger assembled")
  abc.textContent="You've assembled with avengers"

})
let btn2=document.querySelector(".alter")
let fill=document.querySelector(".ip")
btn2.addEventListener('click',()=>{
    let v= fill.value
    console.log(v)
    let op=document.createElement("h3")
op.textContent=" Button pressed 🕸️"
body.append(op)
})

let body=document.querySelector("body")
//creating element
let endd = document.createElement("h2")
endd.textContent="All problems solved...."
endd.style.color="yellow"
body.append(endd)



// DOm Net Ninja