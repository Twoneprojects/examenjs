
function isEven(getal) {
    if (getal % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let getallen = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < getallen.length; i++)
    if (isEven(getallen[i])) {
        console.log(getallen[i]);
    }



