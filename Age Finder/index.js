let birthYear = prompt("Enter Your Birthyear?");
let currentYear = prompt("Enter Current Year?");

let yourAge = currentYear - birthYear ;

if (yourAge < 18) {
    alert("Congratulations!🎉 Your are " +  yourAge + " years old \n You are a TeenAge");
}
else if (yourAge >= 18){
    alert("Congratulations!🎉 Your are " +  yourAge + " years old\n You are an Adult");
}
else if (yourAge >= 10){
    alert("Congratulations!🎉 Your are " +  yourAge + " years old\n You are a Child");
}
else {
    alert("Ops! we can't find someting");
}


// alert("Congratulations!🎉 Your are " + yourAge + "years old");

