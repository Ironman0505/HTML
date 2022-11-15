class Avenger{
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon
    }
    assemble(){
        console.log("The avenger "+this.name+" is here with " +this.weapon);
    }
}
export default Avenger;