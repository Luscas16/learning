function isEven(number){
    if (number < 0) return isEven(-number); //avalia o número positivo
    if (number == 0) return true;
    else if (number == 1) return false;
    else return isEven(number - 2); //chama recursivamente até cair em um dos casos
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));