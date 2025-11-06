function User(name, email){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, "is just logged in");
        
    }
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")


