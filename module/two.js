export default class Student{
    constructor(id,name,age,fav_avenger){
        this.id=id;
        this.name=name;
        this.age=age;
        this.fav_avenger=fav_avenger;
    }
    display(){
        console.log(this.name+" with id : "+this.id+" of age "+this.age+" likes " +this.fav_avenger)
    }
}