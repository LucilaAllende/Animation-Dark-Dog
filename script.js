const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const SPRITE_WIDTH = 6876;
const SPRITE_HEIGHT = 5230;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteWidth = SPRITE_WIDTH / 12;
const spriteHeight = SPRITE_HEIGHT / 10;
const frameX = 0;
const frameY = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, 
    frameX * spriteWidth, 
    frameY * spriteHeight, 
    spriteWidth, 
    spriteHeight, 
    0, 
    0, 
    spriteWidth, 
    spriteHeight
  );
  requestAnimationFrame(animate);
}

animate();