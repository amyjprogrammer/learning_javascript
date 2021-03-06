document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []
    
    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]


    //Create Board
    function createBoard() {
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.setAttribute('draggable',true)
            square.setAttribute('id', i)
            let randomColor = Math.floor (Math.random() * candyColors.length)
            square.style.backgroundColor = candyColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
    
    
    // Drag the candies
    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced
    
    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))
    
    function dragStart(){
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
    }
    
    function dragEnd(){
        let validMoves = [
            squareIdBeingDragged -1,
            squareIdBeingDragged -width,
            squareIdBeingDragged +1,
            squareIdBeingDragged +width
    }
            
    let validMove = validMoves.includes(squareIdBeingReplaced)
    
    if (squareIdBeingReplaced && validMove) {
        squareIdBeingReplaced = null
    } else if (squareIdBeingReplaced && !validMove) {
        squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
        squares[squareIdBeingDragged].sytle.backgroundColor = colorBeingDragged 
    } else squares[squaresIdBeingDragged].style.backgroundColor = colorBeingDraged
    }
    
    function dragOver(e){
        e.preventDefault()
        
    }
    
    function dragEnter(e){
        e.preventDefault()
    }
    
    function dragLeave(){
        
    }
    
    function dragDrop(){
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
    }
         
})