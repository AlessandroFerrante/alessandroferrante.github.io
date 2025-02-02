
/*loader*/
var intervalID = window.setInterval(updateScreen, 0);
var console = document.getElementById("console");
const msg = document.querySelector(".msg");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag);
}

setTimeout(() => { 
  //msg.style.background = "#ff000000";
  msg.innerHTML = "ACCESS GRANTED";
  msg.style.color="limegreen";
  msg.style.textshadow="limegreen";
  msg.style.boxShadow = "-6px -8px 5px var(--up-box), 2px 2px 6px var(--green)";
}, 850);

$(document).ready(function() {
  setTimeout(function(){
      clearInterval(intervalID);
      $("#loading").hide();
    }, 100);
});

/* switch mode */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
    document.documentElement.setAttribute('data-theme', 'light');
    var x = document.getElementById("first");
    if (x.className === "first") {
    }
    else
      x.className = "first";
  }
  else{
    toggleSwitch.checked = false;
    document.documentElement.setAttribute('data-theme', 'dark');
    var x = document.getElementById("first");
    if (x.className === "first") {
      x.className += " light-theme";
    } 
  }
}

/**
 * change browser bar color on reload to "light" mode (witch is reversed with dark mode)
 * otherwise use the color #0f0f0f of the html tag */
document.addEventListener("DOMContentLoaded", function() {
  var metaThemeColor = document.querySelector('meta[name="theme-color"]');
  var linkIcon = document.querySelector('link[rel="icon"]');
  var linkAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (currentTheme === 'dark' && metaThemeColor && metaThemeColor.setAttribute('content', '#007bff')) {
    if (linkIcon  && linkAppleIcon) { // change icon
      linkIcon.setAttribute('href', 'assets/images/LogoGreen.ico');
      linkAppleIcon.setAttribute('href', 'assets/images/LogoGreen.ico');
    }
  } 
  else{
      // set the icon green if dark mode is active when the page loads
      if (linkIcon && linkAppleIcon && currentTheme === 'light') {
        linkIcon.setAttribute('href', 'assets/images/LogoWhiteAzure.ico'); // by default it is blue
        linkAppleIcon.setAttribute('href', 'assets/images/LogoWhiteAzure.ico');
      }
  } 
});
 
function switchTheme(e) {
  $(document).ready(function() {
        intervalID = window.setInterval(updateScreen, 0);
        $("#loading").show();
  });
    if (e.target.checked) {                 
        var x = document.getElementById("first");
        if (x.className === "first") {
        }else{
          x.className = "first";
        } 
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        
        // browser bar
        var metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#0f0f0f');/*1e8601*/
        // change icon
        var linkIcon = document.querySelector('link[rel="icon"]');
        if (linkIcon) linkIcon.setAttribute('href', 'assets/images/LogoWhiteAzure.ico');
        var linkAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
        if(linkAppleIcon) linkAppleIcon.setAttribute('href', 'assets/images/LogoWhiteAzure.ico');

        $(document).ready(function() {
        setTimeout(function(){
            $("#loading").hide();
            clearInterval(intervalID);
          },150);
        });
    }
    else {
          var x = document.getElementById("first"); 
        if (x.className === "first") {
          x.className += " light-theme";
        } 
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');

          // browser bar
          var metaThemeColor = document.querySelector('meta[name="theme-color"]');
          if (metaThemeColor) metaThemeColor.setAttribute('content', '#007bff');/*e0e0e0*/
          // change icon
          var linkIcon = document.querySelector('link[rel="icon"]');
          if (linkIcon) linkIcon.setAttribute('href', 'assets/images/LogoGreen.ico');
          var linkAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
          if(linkAppleIcon) linkAppleIcon.setAttribute('href', 'assets/images/LogoGreen.ico'); 

          $(document).ready(function() {
        setTimeout(function(){
            $("#loading").hide();
            clearInterval(intervalID);
          },150);
      });
    } 
      
}
toggleSwitch.addEventListener('change', switchTheme, false);
/************ */
$(document).ready(function() {
  $("#loading").show();
  if(navigator.platform === "iPhone") {
    document.getElementById('first-component').style.marginTop = '100px'
   }
});

function responsiveFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

function copyEmail() {
  var email = "me@alessandroferrante.net";

  // Copia il testo negli appunti
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = email;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  // Mostra il messaggio di notifica
  var notification = document.getElementById("notification");
  notification.style.display = "flex";

  // Nasconde il messaggio dopo 3 secondi
  setTimeout(function() {
    notification.style.display = "none";
  }, 3000);
}


/******************/
/* STAR OF SPACE */
/****************/
  const stars = document.querySelector('.stars');
  const numStars = 100;
  
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
  
  /*
  const numStars2 = 0;
  for (let i = 0; i < numStars2; i++) {
    const star = document.createElement('div');
    star.classList.add('star2');
  
    // Posizionamento casuale
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    //const duration = Math.random() * 700 + 500;
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.zIndex =`${0}`;
    const r= Math.random() * 256;
    const g= Math.random() * 256;
    const b= Math.random() * 256;
    star.style.backgroundColor = `rgb(${r},${g},${b})`;
    //star.style.animationDuration = `${duration}ms`;
    stars.appendChild(star);
  }
  const stars2 = document.querySelectorAll('.star2');

  for (let i = 0; i < stars2.length; i++) {
    const duration = Math.random() * 650 + 400; // Durata casuale tra 500ms e 1500ms
    stars2[i].style.animationDuration = `${duration}ms`;
    stars2[i].style.zIndex =`${0}`;
  }
  */

  document.addEventListener("DOMContentLoaded", function () {
  var postContainer = document.getElementById("posts");
  var clonePosts = postContainer.innerHTML;
  var slideInterval;
  var isPlaying = true;

  // Add the cloned content to the beginning and end of the container
  postContainer.innerHTML = clonePosts + clonePosts;

  function scrollPosts() {
    postContainer.scrollLeft += 1; // Adjust the scrolling speed if necessary
    // If it reaches the end of the content, go back to the beginning
    if (postContainer.scrollLeft >= postContainer.scrollWidth / 2) {
      postContainer.scrollLeft = 0;
    }
  }

  function startSlider() {
    slideInterval = setInterval(scrollPosts, 20);
  }

  function pauseSlider() {
    clearInterval(slideInterval);
  }

  function toggleSlider() {
    if (isPlaying) {
      pauseSlider();
      document.getElementById("toggleBtn").innerHTML = '<i class="fas fa-play"></i>';
    } else {
      startSlider();
      document.getElementById("toggleBtn").innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  }

  function prevSlide() {
    postContainer.scrollLeft -= 250; 
    if (postContainer.scrollLeft <= 0) {
      postContainer.scrollLeft = postContainer.scrollWidth / 2;
    }
  }

  function nextSlide() {
    postContainer.scrollLeft += 250; 
    if (postContainer.scrollLeft >= postContainer.scrollWidth / 2) {
      postContainer.scrollLeft = 0;
    }
  }

  document.getElementById("toggleBtn").addEventListener("click", toggleSlider);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  postContainer.addEventListener("mouseover", pauseSlider);
  postContainer.addEventListener("mouseout", function() {
    if (isPlaying) {
      startSlider();
    }
  });
  startSlider();
});
 
/******************/
function toggleDetails(cardId, overlayId, arrowId) {
  var x = document.getElementById(cardId);
  if (x.className === "card__header") {
    x.className += " responsive";
  } else {
    x.className = "card__header";
  }
  
  var y = document.getElementById(overlayId);
  if (y.className === "card__overlay") {
    y.className += " responsive";
  } else {
    y.className = "card__overlay";
  }
  
  var z = document.getElementById(arrowId);
  if (z.className === "fa-solid fa-arrow-down") {
    z.className = " fa-solid fa-arrow-up";
  } else {
    z.className = "fa-solid fa-arrow-down";
  }
};

const spaceToggle = document.getElementById("space-toggle");
const checkbox = document.getElementById("toggle-checkbox");
const secondComponent = document.getElementById("second-component");
const shuttle = document.getElementById("fa-solid-fa-shuttle-space");
const animationComponent = document.getElementById("animation-component");
secondComponent.classList.add("show");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    spaceToggle.style.opacity = "1";
    setTimeout(() => {
      shuttle.style.animation="moveUpShuttle 20s linear forwards";
    }, 150);
    secondComponent.classList.remove("show");
    animationComponent.classList.add("show");
    
    setTimeout(() => {
        secondComponent.style.display = "none";
        animationComponent.style.display = "block";
    }, 150);
    setTimeout(() => {
        const destinationElement = document.getElementById("main");
        destinationElement.scrollIntoView({ behavior: "smooth" });
    },600);

  } else {
      shuttle.style.animation = "moveDownShuttle 18s linear";
      
      animationComponent.classList.remove("show");
      secondComponent.classList.add("show");
      
      setTimeout(() => {
          animationComponent.style.display = "none";
          secondComponent.style.display = "block";
      }, 150);
    }
});

// For all links <a> tag
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        // Removes default behavior
        event.preventDefault();

        // to take destination element
        const destinationID = link.getAttribute("href").substring(1);
        const destinationElement = document.getElementById(destinationID);

        // Scrolls to target element with smooth effect
        if (destinationElement) 
            destinationElement.scrollIntoView({ behavior: "smooth" });
      
        if(link.classList.contains("menu-link") )
          setTimeout(() => {
            responsiveFunction();
          }, 750);

        if (destinationElement === contacts) {
          window.scrollTo({ bottom: 0, behavior: 'smooth' });
        }
    });
});