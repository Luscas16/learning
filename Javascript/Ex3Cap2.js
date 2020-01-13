var size = 8;
var chess = "";

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            chess += " ";
        }else{
            chess += "#";
        }
    }
    chess += "\n";
}

console.log(chess);