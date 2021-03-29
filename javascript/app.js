var userName = prompt('what is your name? ');

alert("Welcome to our resturant");



var yourBudget = prompt('Whats your budget', '5 $ , 10 $ ,more');

if (yourBudget === '5') {
    document.write('<img src="images/10.jpg" />')
}
else if (yourBudget === '10') {
    document.write('<img src="images/20.jpg"/>')
}
else if (yourBudget > '10') {
    document.write('<img src="images/30.jpg"/>')
}

else {
    alert('Okay welcome to our resturant')
}

//confirm("Press a button to confirm");




// the validation with function ()
function gettingPassword() {

    var userPassword = prompt('Guess the password! ,,which is (1234)');
    var password = '1234';

    while (userPassword !== password) {
        userPassword = prompt('Please enter the correct password!')
    }
}
gettingPassword()


//adding appetizer dishes

var favAppetizer = prompt('Whats your favourite Appetizer :fries or salad');

while (favAppetizer !== 'fries' && favAppetizer !== 'salad') {

    favAppetizer = prompt('please enter on of the following fries or salad');
}

var appetizerNum = prompt('How many fries or salad would you like to have ?');

for (var i = 1; i <= appetizerNum; i++) {
    if (favAppetizer === 'fries') {
        document.write('<img src="images/fries.webp"/>');
    } else if (favAppetizer === 'salad') {
        document.write('<img src="images/salad.jpg"/>');
    } else {
        alert('wlcome again')
    }
}



console.log(appetizerNum);


for (var i = 0; i < 5; i++) {
    console.log(i);
}

//fuction example 
function addition(num){

    var addCalc = num + num;

    return addCalc;
}
console.log(addition(5))