

var myArray = ['#FFE895', '#82C0FA', '#FFB1F7', '#B0FB95'];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
document.body.style.backgroundColor = rand;

document.getElementById('input').addEventListener('input', (event) => {
document.getElementById('resultbox').textContent = event.target.value;
});

function toggleShadow() {
  var shadow = document.getElementById("resultbox");
  if (shadow.style.textShadow === "none") {
    shadow.style.textShadow = "5px 5px 1px #000000";
  } else {
   shadow.style.textShadow = "none";
  }
}

let kerning = 0;

function changeKerning() {
  kerning++ 
  document.getElementById("resultbox").style.letterSpacing = kerning + "px";
}


function toggleFontSize() {
  var size = document.getElementById("slider");
  if (size.style.display === "none") {
    size.style.display = "block";
  } else {
    size.style.display = "none";
  }
}

function changeSize(){
	document.querySelector('#slider').addEventListener('input', function(e) {
    console.log("hi");
    document.getElementById("resultbox").style.fontSize = this.value + 'px';
  })
  }

changeSize();

function toggleColor() {
  var color = document.getElementById("color");
  if (color.style.display === "none") {
    color.style.display = "block";
  } else {
    color.style.display = "none";
  }
}

var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.color = hex; 
  hex_out.value = hex;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);


function toggleFonts1() {
  var font1 = document.getElementById("font1");
  if (font1.style.display === "none") {
    font1.style.display = "block";
  } else {
   font1.style.display = "none";
  }
}

function toggleFonts2() {
  var font2 = document.getElementById("font2");
  if (font2.style.display === "none") {
    font2.style.display = "block";
  } else {
   font2.style.display = "none";
  }
}

function toggleFonts3() {
  var font3 = document.getElementById("font3");
  if (font3.style.display === "none") {
    font3.style.display = "block";
  } else {
   font3.style.display = "none";
  }
}

function toggleFonts(){

  toggleFonts1()
  toggleFonts2()
  toggleFonts3()
}

function changeFonts1() {
  document.getElementById("resultbox").style.fontFamily = "times-bold";
}

function changeFonts2() {
  document.getElementById("resultbox").style.fontFamily = "futura";
}

function changeFonts3() {
  document.getElementById("resultbox").style.fontFamily = "helvetica-bold";
}


function saveText(){
html2canvas(document.getElementById('resultbox')).then(function(canvas){
	document.body.appendChild(canvas)
})
}


function removeEdits() {
 location.reload();
}

