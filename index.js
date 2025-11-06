class User {
    constructor(name, email){
        this.name = name;
        this.email = email
        this.score = 0;
    }
    login(){
        console.log(this.email, "is just logged in");
        return this
    }
    logout(){
        console.log(this.email, "is just logged out")
        return this
    }
    updateScore(){
        this.score++
        console.log(this.name , "score is now" , this.score);
        return this
    }
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")
userOne.login().updateScore().updateScore().logout()

console.log(userOne);
