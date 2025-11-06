var userOne = {
    name: "hello1",
    email: "hello1@gmail.com",
    login(){
        console.log(this.email, "has logged in");
    },
    logout(){
        console.log(this.email, "has logged out");
    }
}
