const container = document.getElementById('container');

const newGrid = document.createElement('button');
newGrid.textContent = 'New Grid';
document.body.appendChild(newGrid);
newGrid.style.display = 'flex';
newGrid.style.justifyContent = 'center';
// Places button on top
newGrid.style.order = '1';
newGrid.style.fontSize = '4vmin';
newGrid.style.marginBottom = '2vmin';

function createSquare(size) {
    const square = document.createElement('div');
    square.style.backgroundColor = 'lightskyblue';
    square.style.width = `calc((100vmin / ${size}) - 2px)`;
    square.style.height = `calc((100vmin / ${size}) - 2px)`;
    square.style.border = 'thin solid black';

    // Change color on hover
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'white';
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'lightskyblue';
    });

    return square;
}

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const square = createSquare(size);
        container.appendChild(square);
    }
}

// Initialize default grid
let defaultGridSize = 16; // Default grid size (16x16)
createGrid(defaultGridSize);

newGrid.addEventListener('click', () => {
    const userPrompt = prompt('Enter the number of squares per side for the new grid (must be less than 100):');

    const gridSize = parseInt(userPrompt);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(gridSize);
});

container.style.width = '100vmin';
container.style.height = '100vmin';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
// Places grid bottom
container.style.order = '2';

const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
