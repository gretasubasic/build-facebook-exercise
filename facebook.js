var database = [
    {
    username: "Greta",
    password: "thisispassword"

    }
];

var newsFeed = [
    {
        username: "Thimothy",
        timeline: "That is a brand new information"
    },

    {
        username: "Sally",
        timeline: "Javascript is cool"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(username, password){
    if (username === database[0].username && password === database[0].password)
{
    console.log(newsFeed);

} else{
    alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);

