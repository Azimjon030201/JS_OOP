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


class Admin extends User{
    deleteUser(user){
        users = users.filter(u=>{
            return u.email !=user.email
        })
    }
}
var userOne = new User("Azimjon", "hazard030201@gmail.com")
var userTwo = new User("Hello2", "hello2@gmail.com")
userOne.login().updateScore().updateScore().logout()

var admin = new Admin("hello2","hello2@gmail.com")
var users = [userOne, userTwo]
admin.deleteUser(userTwo);

console.log(users);
