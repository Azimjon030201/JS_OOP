class Calculator{
    add(a, b){
        return a + b;
    }
    subtract(a, b){
        return a - b;
    }
    multiply(a, b){
        return a * b;
    }
    divide(a, b){
        return a / b;
    }
    
}
let calculator = new Calculator()
console.log(calculator.add(5,6));
console.log(calculator.subtract(5,6));
console.log(calculator.multiply(5,6));
console.log(calculator.divide(5,6));
