/*loader*/
const stars = document.querySelector('.stars');
const numStars = 1000;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Posizionamento casuale
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 200 + 500;
  star.style.left = `${left}%`;
  star.style.top = `${top}%`;
  star.style.zIndex =`${0}`;
  star.style.animationDuration = `${duration}ms`;
  const r= Math.random() * 200 +56;
  const g= Math.random() * 200 +56;
  const b= Math.random() * 200 +56;
  star.style.backgroundColor = `rgb(${r},${g},${b})`;
  stars.appendChild(star);
}

$(document).ready(function() {
  setTimeout(function(){
      $("#loading").hide();
    }, 200);
});