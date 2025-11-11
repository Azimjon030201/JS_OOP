class OnesThreesNines{
    constructor(num){
        this.nines = Math.floor(num/9);
        this.ones = Math.floor(num/1);
        this.threes = Math.floor(num/3);
    }
}
let n1 = new OnesThreesNines(5)
console.log(n1.nines);
console.log(n1.ones);
console.log(n1.threes);


