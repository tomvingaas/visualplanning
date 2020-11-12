

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.setAttribute("tabindex", 0);

var board = new Board(1200, 800, 40);
board.initCells(ctx);

var ctrlDown = false;

//mouselisteners
var lastX = null;
var lastY = null;

canvas.onkeydown = function(e){
    console.log(e.keyCode);
   
 };
 

canvas.onmousemove = function(event){
    var x = parseInt(Math.floor(event.pageX / board.cellSize)) * board.cellSize;
    var y = parseInt(Math.floor(event.pageY / board.cellSize)) * board.cellSize;
    x = x / board.cellSize;
    y = y / board.cellSize;
    
    if(x <= 29 && y <= 19){

        if((lastX !== null && lastX != x) || (lastY !== null && lastY != y)) {
           // board.cells.get(lastX+','+lastY).drawCell(ctx);
          //  board.cells.get(x+','+y).drawCellTemp(ctx, 'gray', 'red');
        }
       

        lastX = x;
        lastY = y;
    }

    
}

var shiftDown = false;
canvas.onclick = function(event){
    var x = parseInt(Math.floor(event.pageX / board.cellSize)) * board.cellSize;
    var y = parseInt(Math.floor(event.pageY / board.cellSize)) * board.cellSize;
    x = x / board.cellSize;
    y = y / board.cellSize;
    
    if(x <= 29 && y <= 19){
        if(shiftDown){
            board.cells.get(x+','+y).drawCellTemp(ctx, 'gray', 'red');
        }else{
            if((lastX !== null && lastX != x) || (lastY !== null && lastY != y)) {
                board.cells.get(lastX+','+lastY).drawCell(ctx);
                board.cells.get(x+','+y).drawCellTemp(ctx, 'gray', 'red');
             }
        }
        lastX = x;
        lastY = y;     
    } 
}

canvas.onkeydown = function(e){
    if(e.keyCode == 16){
        shiftDown = true;
    }
}

canvas.onkeyup = function(e){
    if(e.keyCode == 16){
        shiftDown = false;
    }
}




