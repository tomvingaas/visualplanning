
class Cell{
    constructor(x, y, size, color, borderColor ){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }

    drawCellTemp(ctx, mainColor, borderColor){
        ctx.fillStyle = borderColor;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
        ctx.fillStyle = mainColor;
        ctx.fillRect(this.x * this.size + 3, this.y * this.size + 3, this.size - 6, this.size - 6);
        
    }

    drawCell(ctx){
        ctx.fillStyle = this.borderColor;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.size + 3, this.y * this.size + 3, this.size - 6, this.size - 6);
    }
}

class Board {
    constructor(width, height, cellSize){
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cells = new Map();
    }

    initCells(ctx){
        for(var row = 0; row < this.width / this.cellSize; row++ ){
            for(var column = 0; column < this.height / this.cellSize; column++){
                var newCell = new Cell(row, column, this.cellSize, 'gray', 'black' ) 
                this.cells.set((row + ',' +column), newCell);
                newCell.drawCell(ctx);
            }
        }
    }
}