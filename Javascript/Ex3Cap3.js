function countBs(word){
    var count = 0;
    for(var i = 0; i < word.length; i++){
        if(word.charAt(i) == "B") count++; //word[i] também funciona
    }
    return count;
}

function countChar(word, caractere){
    var count = 0;
    for (var i = 0; i < word.length; i++){
        if(word.charAt(i) == caractere) count++;
    }
    return count;
}

console.log(countBs("BaBaBaB"));
console.log(countChar("Madagascar", "a"));
