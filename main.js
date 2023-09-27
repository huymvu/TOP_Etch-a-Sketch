const container = document.querySelector(".container");
const button = document.querySelector("button");

let defaultSize = 256;
for (let i = 0; i < defaultSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = "20px";
    grid.style.height = "20px";
    container.appendChild(grid);
};
changeSquareColor();

button.addEventListener('click', () => {
    container.innerHTML = "";
    let gridSize = prompt('Please enter the grid size (Maximum is 100)');
    if (gridSize > 100) {
        gridSize = prompt('That is too big. Please re-enter the grid size (Maximum is 100)');
    }
    let size = gridSize * gridSize;
    for (let i = 0; i < size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `${320 / gridSize}px`;
        grid.style.height = `${320 / gridSize}px`;
        container.appendChild(grid);
    };
    changeSquareColor();
})

function changeSquareColor() {
    const gridSquares = document.querySelectorAll(".grid");
    gridSquares.forEach((square) => {
        square.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = "gray";
        })
    })
}
