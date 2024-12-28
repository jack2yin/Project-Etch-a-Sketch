const container = document.getElementById('container');

function square() {
    const square = document.createElement('div');
    container.appendChild(square);

    square.style.backgroundColor = 'lightskyblue';
    square.style.width = 'calc((100vmin / 16) - 2px)';
    square.style.height = 'calc((100vmin / 16) - 2px)';
    square.style.border = 'thin solid black';

    // Change color on hover
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'white';
    });

    // Revert color when mouse leaves
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'lightskyblue';
    });

    return square;
}

// Create grid
for (let i = 0; i < 256; i++) {
    square();
}

container.style.width = '100vmin';
container.style.height = '100vmin';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.order = '2';

const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';


const newGrid = document.createElement('button');
newGrid.textContent = 'New Grid';
document.body.appendChild(newGrid);
newGrid.style.display = 'flex';
newGrid.style.justifyContent = 'center';
//Places button on top
newGrid.style.order = '1';
