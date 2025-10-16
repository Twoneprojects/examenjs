let hoeveel = parseFloat(prompt("hoeveel namen wil je ingeven?"));
let namen=[];
let som = 0;

    for (let i = 0; i < hoeveel; i++) {
        let invoer = prompt("Geef naam " + (i + 1) + " in:");
        namen.push(invoer);
        if (invoer.length > 5){
            som ++ ;
        }

}
console.log("er zijn "+ som + " namen langer dan 5 letters.");


