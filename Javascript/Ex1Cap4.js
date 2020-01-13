function range(init, end) {
    var vet = [];
    for(var i = init; i <= end; i++)
        vet.push(i);
    return vet;
}

function sum(vet) {
    var tot = 0;
    for (var i = 0; i < vet.length; i++)
        tot += vet[i];
    return tot;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));