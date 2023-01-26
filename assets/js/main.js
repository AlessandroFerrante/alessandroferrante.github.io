function m() {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
};

function responsiveFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
function detailsFunction1() {
  var x = document.getElementById("card__header1");
  if (x.className === "card__header") {
    x.className += " responsive";
  } else {
    x.className = "card__header";
  }
  var y = document.getElementById("card__overlay1");
  if (y.className === "card__overlay") {
    y.className += " responsive";
  } else {
    y.className = "card__overlay";
  }
  var z = document.getElementById("fa-solid fa-arrow-down1");
  if (z.className === "fa-solid fa-arrow-down") {
    z.className = " fa-solid fa-arrow-up";
  } else {
    z.className = "fa-solid fa-arrow-down";
  }
};
function detailsFunction2() {
  var x = document.getElementById("card__header2");
  if (x.className === "card__header") {
    x.className += " responsive";
  } else {
    x.className = "card__header";
  }
  var y = document.getElementById("card__overlay2");
  if (y.className === "card__overlay") {
    y.className += " responsive";
  } else {
    y.className = "card__overlay";
  }
  var z = document.getElementById("fa-solid fa-arrow-down2");
  if (z.className === "fa-solid fa-arrow-down") {
    z.className = " fa-solid fa-arrow-up";
  } else {
    z.className = "fa-solid fa-arrow-down";
  }
};
function detailsFunction3() {
  var x = document.getElementById("card__header3");
  if (x.className === "card__header") {
    x.className += " responsive";
  } else {
    x.className = "card__header";
  }
  var y = document.getElementById("card__overlay3");
  if (y.className === "card__overlay") {
    y.className += " responsive";
  } else {
    y.className = "card__overlay";
  }
  var z = document.getElementById("fa-solid fa-arrow-down3");
  if (z.className === "fa-solid fa-arrow-down") {
    z.className = " fa-solid fa-arrow-up";
  } else {
    z.className = "fa-solid fa-arrow-down";
  }
};
function detailsFunction4() {
  var x = document.getElementById("card__header4");
  if (x.className === "card__header") {
    x.className += " responsive";
  } else {
    x.className = "card__header";
  }
  var y = document.getElementById("card__overlay4");
  if (y.className === "card__overlay") {
    y.className += " responsive";
  } else {
    y.className = "card__overlay";
  }
  var z = document.getElementById("fa-solid fa-arrow-down4");
  if (z.className === "fa-solid fa-arrow-down") {
    z.className = " fa-solid fa-arrow-up";
  } else {
    z.className = "fa-solid fa-arrow-down";
  }
};

function copyEmail() {
    navigator.clipboard.writeText("aleferrante003@gmail.com");
    alert("Copied the email: aleferrante003@gmail.com");
  }
function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 100,
      tempTypeSpeed = 0;

  var type = function() {
    
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }

  };

  return {
      type: type
  };
}

var typer = document.getElementById('typewriter');
var typer2 = document.getElementById('typewriter2');

typewriter = setupTypewriter(typewriter);
typewriter.type();
typewriter = setupTypewriter(typewriter2);
typewriter.type();
/*********** */
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
   }else{
     x.className = "first";
   } 
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
function switchTheme(e) {
  $(document).ready(function() {
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
        $(document).ready(function() {
        setTimeout(function(){
            $("#loading").hide();
          },400);
      });
    }
    else {
          
          var x = document.getElementById("first");
        if (x.className === "first") {
          x.className += " light-theme";
        } 
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          $(document).ready(function() {
        setTimeout(function(){
            $("#loading").hide();
          },400);
      });
    } 
      
}
toggleSwitch.addEventListener('change', switchTheme, false);
/************ */
/*loader*/
var intervalID = window.setInterval(updateScreen, 200);
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
  msg.style.boxShadow = "0 0 30px limegreen";
}, 750);


