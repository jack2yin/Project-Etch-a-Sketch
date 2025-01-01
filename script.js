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
    square.style.backgroundColor = 'white';
    square.style.width = `calc(100vmin / ${size})`;
    square.style.height = `calc(100vmin / ${size})`;
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box'; // Include border in element size
    
    // Randomize color selection
    function getRandomRgbColor() {
        const red = Math.floor(Math.random() * 256);   // Random value between 0 and 255
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    const randomColor = getRandomRgbColor();

    // Change color on hover
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = randomColor;
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'black';
    });

    square.addEventListener('touchstart', () => {
        square.style.backgroundColor = randomColor;
    });

    square.addEventListener('touchmove', () => {
        square.style.backgroundColor = randomColor;
    })

    square.addEventListener('touchend', () => {
        square.style.backgroundColor = 'black';
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
container.style.justifyContent = 'space-evenly';
container.style.alignItems = 'space-evenly';
container.style.flexWrap = 'wrap';
// Places grid bottom
container.style.order = '2';

const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
