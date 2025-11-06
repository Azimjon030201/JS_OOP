function User(name, email){
    this.email = email;
    this.name = name;
    this.online = false;

}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, "is just logged in");
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, "is just logged in");
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")


