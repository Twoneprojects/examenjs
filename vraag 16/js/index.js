
var getallen = [];
getallen.push(prompt("geef een eerste getal in:"));
getallen.push(prompt("geef een tweede getal in:"));
getallen.push(prompt("geef een derde getal in:"));
getallen.push(prompt("geef een vierde getal in:"));
getallen.push(prompt("geef een vijfde getal in:"));
for(var i = 0; i < getallen.length; i++){
    if(getallen[i]<= 10) continue;
    console.log(getallen[i]);
}



