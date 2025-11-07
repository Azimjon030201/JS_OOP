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

function Admin(...args){
    User.apply(this, args);
    this.role = "super admin";

}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u){
    users = users.filter(user =>{
        return user.email != u.email;
    })
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")
var admin = new Admin("hello3", "hello3@gmail.com")

var users = [userOne, userTwo, admin]

admin.deleteUser(userTwo);
