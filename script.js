

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

function changeKerning() {
  document.getElementById("resultbox").style.letterSpacing = "10px";
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
	console.log("SIZE");
	document.querySelector('input').addEventListener('input', e => document.querySelector('input').style.fontSize = e.target.value + 'px');
}

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

function saveText(){
html2canvas(document.getElementById('resultbox')).then(function(canvas){
	document.body.appendChild(canvas)
})
}

// var node = document.getElementById('resultbox');
// var btn = document.getElementById('save');

// btn.onclick = function() {

//   domtoimage.toBlob(document.getElementById('resultbox'))
//     .then(function(blob) {
//       window.saveAs(blob, 'saveText.png');
//     });
// }

// const myCanvas = document.querySelector("#myCanvas");
// const saveText = document.querySelector("#save");

// saveText.addEventListener("click",function(){

// 	if(window.navigator.msSaveBlob){
// 		window.navigator.msSaveBlob(myCanvas.msToBlob() , "canvas-image.png")
// 	} else{
// 		 const a = document.createElement("a"); 

// 		 document.body.appendChild(a);
// 		 const dataURI = myCanvas.toDataURL()
// 		 a.href = myCanvas.toDataURL();
// 		 a.download =  "canvas-image.png"; 
// 		 a.click();
// 		 document.body.removeChild(a);
// 	}
// });

// function saveText(){ 
// 	html2canvas(document.getElementById("resultbox")).then(function(canvas){
// 	var ajax = new XMLHttpRequest();
// 	ajax.open("POST" , "save-capture.html" , true);
// 	ajax.send("image=" + canvas.toDataURL("image/png", 0.9));
// 	ajax.setRequestHeader("Content-type" , "application/x-www-form-urlencoded ");
// 	ajax.onreadystatechange = function(){
// 		if (this.readyState == 4 && this.status == 200 ){
// 			console.log(this.respondText);
// 		}
// 	}
// 	});
// }

// function reset(){
//     document.getElementById("input").removeAttribute('style')
//   }

// $( "#slider-range-max" ).slider({
//     range: "max",
//     min: 10,
//     max: 70,
//     value: 10,
//     slide: function( event, ui ) {
//       $( "#text" ).css( { fontSize: ui.value} );
//     }
//   });


// function circularText(txt, radius, classIndex) {
//   txt = txt.split(""),
//     classIndex = document.getElementsByClassName("circTxt")[classIndex];

//   var deg = 360 / txt.length,
//     origin = 0;

//   txt.forEach((ea) => {
//     ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
//     classIndex.innerHTML += ea;
//     origin += deg;
//   });
// }

// circularText("this text is in a circle ", 100, 0);





//   // detect when pressing a key 
//   // grab value of input and set it equal to set the text into the result box 

 

