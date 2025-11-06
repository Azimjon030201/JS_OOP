var userOneEmail = "hello1@gmail.com"
var userOneName = "hello1"
var userOneFriends = ["hello2"]

var userTwoEmail = "hello2@gmail.com"
var userTwoName = "hello2"
var userTwoFriends = ["hello3"]

var userThreeEmail = "hello3@gmail.com"
var userThreeName = "hello3"
var userThreeFriends = ["hello1"]

function login(email){
    console.log(email, "is now online");
    
}
function logout(email){
    console.log(email, "is now offline");
    
}
function logFriends(friends){
    friends.forEach(friend => {
        console.log(friend);
    });
}

login(userOneEmail);
