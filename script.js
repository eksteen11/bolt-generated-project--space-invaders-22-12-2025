const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Player
    let playerX = canvas.width / 2;
    let playerY = canvas.height - 30;
    const playerWidth = 20;
    const playerHeight = 10;

    // Aliens (example - needs expansion)
    const aliens = [];
    for (let i = 0; i < 5; i++) {
      aliens.push({ x: i * 50 + 10, y: 50, width: 20, height: 10 });
    }

    function drawPlayer() {
      ctx.fillStyle = 'blue';
      ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    }

    function drawAliens() {
      ctx.fillStyle = 'red';
      aliens.forEach(alien => ctx.fillRect(alien.x, alien.y, alien.width, alien.height));
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      drawAliens();
      requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' && playerX > 0) {
        playerX -= 5;
      } else if (event.key === 'ArrowRight' && playerX < canvas.width - playerWidth) {
        playerX += 5;
      }
    });

    gameLoop();
