const profilePic = document.querySelector(".profile-pic");
const profilePicGlow = profilePic.querySelector(".hover-glow");
const alertButton = document.getElementById("alert-button");

const bounds = profilePic.getBoundingClientRect();

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark-mode");
}

function tiltAwayFromMouse(e) {
  const leftX = e.clientX - bounds.x;
  const topY = e.clientY - bounds.y;
  const center = {
    x: leftX - bounds.width/2,
    y: topY - bounds.height/2
  };
  const distance = Math.sqrt(center.x**2 + center.y**2);

  profilePic.style.transform = `
    scale3d(1.1, 1.1, 1.1)
    rotate3d(
      ${center.y/100}, 
      ${-center.x/100}, 
      0, 
      ${Math.log(distance)*4}deg)
  `;

  profilePicGlow.style.backgroundImage = `
    radial-gradient(
      circle at ${center.x*2 + bounds.width/2}px ${center.y*2 + bounds.height/2}px,
      #ffffff65, #0000000f)
  `;
}

profilePic.addEventListener('mouseenter', () => {
  toggleDarkMode();
  document.addEventListener('mousemove', tiltAwayFromMouse);
});

profilePic.addEventListener('mouseleave', () => {
  toggleDarkMode();
  document.removeEventListener('mousemove', tiltAwayFromMouse);

  profilePicGlow.style.background = '';
  profilePic.style.transform = '';
});

alertButton.addEventListener('click', () => {
  alert("Hello, welcome to my page!");
})

