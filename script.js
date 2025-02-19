const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const size = 35;
const cellSize = 20; // Karelerin büyüklüğü
canvas.width = size * cellSize;
canvas.height = size * cellSize;

let maze, player, goal, level = 1;

document.getElementById("level").textContent = level;

function createMaze() {
    let maze = Array(size).fill().map(() => Array(size).fill(1));

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function carve(x, y) {
        maze[y][x] = 0;
        let directions = [[0, -2], [0, 2], [-2, 0], [2, 0]];
        shuffle(directions);

        for (const [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (ny > 0 && ny < size && nx > 0 && nx < size && maze[ny][nx] === 1) {
                maze[y + dy / 2][x + dx / 2] = 0;
                carve(nx, ny);
            }
        }
    }

    let startX = 1 + 2 * Math.floor(Math.random() * (size / 2));
    let startY = 1 + 2 * Math.floor(Math.random() * (size / 2));
    carve(startX, startY);

    return maze;
}

function getRandomEmptyCell() {
    let x, y;
    do {
        x = Math.floor(Math.random() * size);
        y = Math.floor(Math.random() * size);
    } while (maze[y][x] !== 0);
    return { x, y };
}

// Labirentin "çözülebilir" olup olmadığını BFS ile kontrol eden fonksiyon.
function isSolvable(start, end) {
    let visited = Array(size).fill().map(() => Array(size).fill(false));
    let queue = [start];

    while (queue.length > 0) {
        let { x, y } = queue.shift();
        if (x === end.x && y === end.y) return true;

        let directions = [
            { dx: 0, dy: -1 }, { dx: 0, dy: 1 },
            { dx: -1, dy: 0 }, { dx: 1, dy: 0 }
        ];

        for (let { dx, dy } of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < size && ny < size &&
                maze[ny][nx] === 0 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push({ x: nx, y: ny });
            }
        }
    }
    return false;
}

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (maze[y][x] === 1) {
                ctx.fillStyle = "black";
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x * cellSize, player.y * cellSize, cellSize, cellSize);

    ctx.fillStyle = "red";
    ctx.fillRect(goal.x * cellSize, goal.y * cellSize, cellSize, cellSize);
}

function movePlayer(dx, dy) {
    let newX = player.x + dx;
    let newY = player.y + dy;

    if (newX >= 0 && newX < size && newY >= 0 && newY < size && maze[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;

        if (player.x === goal.x && player.y === goal.y) {
            level++;
            document.getElementById("level").textContent = level;
            startGame();
        }

        drawMaze();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") movePlayer(0, -1);
    if (event.key === "ArrowDown") movePlayer(0, 1);
    if (event.key === "ArrowLeft") movePlayer(-1, 0);
    if (event.key === "ArrowRight") movePlayer(1, 0);
});

function startGame() {
    do {
        maze = createMaze();
        player = getRandomEmptyCell();
        do {
            goal = getRandomEmptyCell();
        } while (goal.x === player.x && goal.y === player.y);
    } while (!isSolvable(player, goal)); // **Labirent çözülebilir mi kontrol et**

    drawMaze();
}

startGame();