function arrayToList(array) {
    var list = null; //lista inicia nula
    for (var i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list}; //rest aponta para o próximo elemento da list
    }
    return list;
}

function listToArray(list){
    var array = [];
    for (var node = list; node; node = node.rest) { //node.rest é o valor que aponta para o próximo valor
        array.push(node.value); //push insere value do nodo
    }
    return array;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));