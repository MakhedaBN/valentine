
function createHeart() {
    const hearts = ['💖', '💜', '❤️']; // heart colors
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // pick random heart emoji
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    // random position along width
    heart.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

    // random size
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';

    document.body.appendChild(heart);

    // remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// spawn a heart every 300ms
setInterval(createHeart, 300);
