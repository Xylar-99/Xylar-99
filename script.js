const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const speedEl = document.getElementById('speed');
const restartBtn = document.getElementById('restart');

const gridSize = 20; // pixels per cell
const cols = canvas.width / gridSize;
const rows = canvas.height / gridSize;

let snake;
let food;
let dir;
let nextDir;
let running = true;
let speed = 8; // frames per second
let score = 0;

function reset() {
  snake = [{x: Math.floor(cols/2), y: Math.floor(rows/2)}];
  dir = {x: 1, y: 0};
  nextDir = dir;
  placeFood();
  running = true;
  score = 0;
  speed = 8;
  updateHud();
}

function placeFood(){
  while(true){
    const x = Math.floor(Math.random()*cols);
    const y = Math.floor(Math.random()*rows);
    if(!snake.some(s => s.x===x && s.y===y)){ food = {x,y}; break; }
  }
}

function updateHud(){
  scoreEl.textContent = score;
  speedEl.textContent = speed;
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // draw food
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(food.x*gridSize+2, food.y*gridSize+2, gridSize-4, gridSize-4);

  // draw snake
  ctx.fillStyle = '#10b981';
  for(let i=0;i<snake.length;i++){
    const s = snake[i];
    ctx.fillRect(s.x*gridSize+1, s.y*gridSize+1, gridSize-2, gridSize-2);
  }
}

function step(){
  if(!running) return;
  dir = nextDir;
  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};

  // wrap around screen
  head.x = (head.x + cols) % cols;
  head.y = (head.y + rows) % rows;

  // collision with self
  if(snake.some(s => s.x===head.x && s.y===head.y)){
    running = false; // game over
    return;
  }

  snake.unshift(head);

  // eat food
  if(head.x===food.x && head.y===food.y){
    score += 1;
    speed = Math.min(20, 8 + Math.floor(score/3));
    placeFood();
  } else {
    snake.pop();
  }

  updateHud();
}

let last = 0;
function loop(ts){
  if(!last) last = ts;
  const elapsed = ts - last;
  const interval = 1000 / speed;
  if(elapsed > interval){
    step();
    draw();
    last = ts;
  }
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', e => {
  const key = e.key.toLowerCase();
  if(key === 'arrowup' || key === 'w'){ if(dir.y!==1) nextDir = {x:0,y:-1}; }
  if(key === 'arrowdown' || key === 's'){ if(dir.y!==-1) nextDir = {x:0,y:1}; }
  if(key === 'arrowleft' || key === 'a'){ if(dir.x!==1) nextDir = {x:-1,y:0}; }
  if(key === 'arrowright' || key === 'd'){ if(dir.x!==-1) nextDir = {x:1,y:0}; }
  if(key === ' '){ running = !running; }
});

restartBtn.addEventListener('click', () => { reset(); });

reset();
requestAnimationFrame(loop);
