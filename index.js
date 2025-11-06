class User {
    constructor(name, email){
        this.name = name;
        this.email = email
    }
    login(){
        console.log(this.email, "is just logged in");
    }
    logout(){
        console.log(this.email, "is just logged out")
    }
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")

console.log(userOne);
