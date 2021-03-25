var userName = prompt('what is your name? ');

alert("Welcome to our resturant");



var yourBudget = prompt('Whats your budget','5 , 10 ,more');

if(yourBudget === '5'){
    document.write('<img src="10.jpg" />')
}
else if(yourBudget === '10'){
    document.write('<img src="20.jpg"/>')
}
else if (yourBudget >'10'){
    document.write('<img src="30.jpg"/>')
}

else {
    alert('Okay welcome to our resturant')
}

confirm("Press a button to confirm");
