class User{
    static Count = 0
    constructor(userName){
        this.userName = userName;
        this.userCount = ++User.Count;
    }
}
let user1 = new User("Azimjon");
console.log(user1.userCount);
let user2 = new User("Sardor");
console.log(user2.userCount);
let user3 = new User("Bilol");
console.log(user3.userCount);