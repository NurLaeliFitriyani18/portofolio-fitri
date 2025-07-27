const typingElement = document.getElementById('typing');
const roles = ['Arsitek', 'Spesialis Desain'];
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeLoop() {
  const role = roles[roleIndex];
  if (typing) {
    typingElement.textContent += role.charAt(charIndex);
    charIndex++;
    if (charIndex === role.length) {
      typing = false;
      setTimeout(typeLoop, 1000);
    } else {
      setTimeout(typeLoop, 100);
    }
  } else {
    typingElement.textContent = role.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeLoop, 50);
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);

// Musik autoplay
const bgMusic = document.getElementById("bgMusic");
let hasPlayed = false;

function tryPlayMusic() {
  if (!hasPlayed) {
    bgMusic.play().catch(() => {});
    hasPlayed = true;
  }
}

document.addEventListener("click", tryPlayMusic);
document.addEventListener("scroll", tryPlayMusic);
