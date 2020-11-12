

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var board = new Board(1200, 800, 40);
board.initCells(ctx);
board.cells.forEach(function(value, key){
    console.log(key + ' = ' + value.size);
});

//mouselisteners
var lastX = null;
var lastY = null;

canvas.onmousemove = function(event){
    var x = parseInt(Math.floor(event.pageX / board.cellSize)) * board.cellSize;
    var y = parseInt(Math.floor(event.pageY / board.cellSize)) * board.cellSize;
    x = x / board.cellSize;
    y = y / board.cellSize;
    
    if(x <= 29 && y <= 19){

        if((lastX !== null && lastX != x) || (lastY !== null && lastY != y)) {
            board.cells.get(lastX+','+lastY).drawCell(ctx);
            board.cells.get(x+','+y).drawCellTemp(ctx, 'gray', 'red');
        }
       

        lastX = x;
        lastY = y;
    }

    
}


