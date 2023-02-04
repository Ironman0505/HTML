
//Class usage and calculating the avg of  the avengers 🤩🤩

class Student{
    constructor(roll,name,marks)
    {
        this.roll=roll;
        this.name=name;
        this.marks=marks;
    }
    avg_marks(){
        let avg=this.marks.reduce((ac,mrks)=>ac+mrks)
        console.log("The average marks of " + this.name +" are " + avg/marks.length);
    }

}

let std1=new Student(01,'Captian America',[48,49,45,50,48]);
std1.avg_marks();


let std2=new Student(02,'Iron Man',[46,50,50,50,50]);
std2.avg_marks();


let std3=new Student(33,'Thanos',[48,40,47,49.5,48]);
std3.avg_marks();


let std4=new Student(33,'Hulk',[48,50,20,40,49]);
std4.avg_marks();


let std5=new Student(33,'Ant Man',[10,33,46,50,50]);
std5.avg_marks();



// Creation of object literal

let product={

    id:333,
    name:'Mjolnir',
    brand:'Hammer',
    price:1,
    discount:33.58,
    selling_price:function(){
     let less=this.price*this.discount*0.01;
     let sp=this.price-less;
     return sp;
    }
}
let price=product.selling_price();
console.log( 'The Selling Price of the product '+ product.name + " is "+price*10000 +'$');

// protoype prop usage
// common functionalities of the constructor are added to the prototype.....

function Tin(name,age,hobbies,roll){
        this.name=name,
        this.age=age,
        this.hobbies=hobbies,
        this.roll=roll
}
Tin.prototype.getPhenoms= function(){
    let prend=this.name + " " + this.roll;
    console.log("He's phenoms ",prend)
}

let ph=new Tin('Tin papa',19,'Everything',58)
console.log(ph)
console.log(ph.getPhenoms())



//Dates in js
let d=new Date();
console.log(d);


// math functions....
// Math.property
