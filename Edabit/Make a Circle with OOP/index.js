class Circle  {
	// put your code here
    PI = Math.PI; 
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return this.PI*this.radius**2;
    }
    getPerimeter(){
        return 2 * this.PI * this.radius;
    }
}


// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
