//Objects
const circle = {
    radius : 1,
    location:{ //radius and location are properties
        x:1,
        y:1
    },
    draw:function(){    //draw is a method in object
        console.log("draw")
    } 
}

circle.draw() //draw
console.log(circle.radius)




//Without using OOP aproach
/*

create user one
var userOneEmail = "ryu@gmail.com"
var userOneName = "Ryu"
var userOneFriends = ["Yoshi,Helsinki,Yoshi"]

create user two
var userTwoEmail = "Yoshi@gmail.com"
var userTwoName = "Yoshi"
var userTwoFriends = ["Ryu,Mario"]

create user Three
var userThreeEmail = "Mario@gmail.com"
var userThreeName = "Mario"
var userThreeFriends = ["Ryu,Yoshi"]

function login(email){
    console.log(email,"is now online")
}

function login(email){
    console.log(email,"has logged out")
}

function logFriends(friends){
    friends.forEach(friend =>{
        console.log(friend)
    })
}

login(userOneEmail) */

//With using OOP aproach

var userOne = {

    userOneEmail : "ryu@gmail.com",
    userOneName : "Ryu",
    userOneFriends : ["Yoshi,Helsinki,Yoshi"],
    login(){                                   //object içinde bu şekilde fonksiyon tanımlanabilir
        console.log(this.email,"has logged in") //console da veya aşağıda çağırınca userOne.login() has logged in yazar
    },
    logout(){
        console.log(this.email,"has logged out")
    }

}

//Updating Properties

userOne.userOneName ="fatih"
console.log(userOne.userOneName) //fatih
            // or
userOne["userOneName"]="veli"
console.log(userOne.userOneName)  //veli

//Adding Properties

userOne.age ="25"
userOne.logInfo = function(){
    console.log(this.userOneName, this.age, this.userOneEmail);
};
userOne.logInfo();  // veli 25 ryu@gmail.com

//Classes

class User {  //Yazım kuralı olarak Class isimleri mutlaka büyük harfle başlar. 
    constructor(email, name){  //Bir class içerisinde bir tane constructor tanımlanabilir
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}  //yukarıdaki farklı objectleri teker teker çağırmak yerine class ile fonksyion 
        // tanımlayıp ardından paramtereleri kişilere atayabiliriz

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var userThree = new User('mfk@gmail.com', 'Fatih');

userOne.login();
userTwo.logout();
userThree.login();