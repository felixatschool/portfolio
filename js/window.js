var zdex=2;
var slideCounter=1;

// Make the DIV element draggable:
dragElement(document.getElementById("showreel"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("mycat"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("mycat").onmousedown = function () {
  updatezdex("theCat");
}

document.getElementById("closeButtonMycat").onmousedown = function () {
  var box=document.getElementById("mycat");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////
dragElement(document.getElementById("programming"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("programming").onmousedown = function () {
  updatezdex("theProg");
}

document.getElementById("closeButtonProgramming").onmousedown = function () {
  var box=document.getElementById("programming");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("visualArt"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("visualArt").onmousedown = function () {
  updatezdex("theVisualArt");
}
document.getElementById("closeButtonVisualArt").onmousedown = function () {
  var box=document.getElementById("visualArt");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("web"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("web").onmousedown = function () {
  updatezdex("theWeb");
}
document.getElementById("closeButtonWeb").onmousedown = function () {
  var box=document.getElementById("web");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("cv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("cv").onmousedown = function () {
  updatezdex("theCV");
}
document.getElementById("closeButtonCV").onmousedown = function () {
  var box=document.getElementById("cv");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("game"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("game").onmousedown = function () {
  updatezdex("theGame");

}
document.getElementById("closeButtonGame").onmousedown = function () {
  var box=document.getElementById("game");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};


///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("room"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("room").onmousedown = function () {
  updatezdex("theRoom");

}
document.getElementById("closeButtonRoom").onmousedown = function () {
  var box=document.getElementById("room");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("peep"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("peep").onmousedown = function () {
  updatezdex("thePeep");

}
document.getElementById("closeButtonPeep").onmousedown = function () {
  var box=document.getElementById("peep");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("unity"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("unity").onmousedown = function () {
  updatezdex("theUnity");

}
document.getElementById("closeButtonUnity").onmousedown = function () {
  var box=document.getElementById("unity");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("concept"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("concept").onmousedown = function () {
  updatezdex("theConcept");

}
document.getElementById("closeButtonConcept").onmousedown = function () {
  var box=document.getElementById("concept");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("video"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("video").onmousedown = function () {
  updatezdex("theVideo");

}
document.getElementById("closeButtonVideo").onmousedown = function () {
  var box=document.getElementById("video");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
  pause();
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("unityf"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("unityf").onmousedown = function () {
  updatezdex("theUnityf");

}
document.getElementById("closeButtonUnityf").onmousedown = function () {
  var box=document.getElementById("unityf");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("flash"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("flash").onmousedown = function () {
  updatezdex("theFlash");

}
document.getElementById("closeButtonFlash").onmousedown = function () {
  var box=document.getElementById("flash");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("videoUnity"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("videoUnity").onmousedown = function () {
  updatezdex("theVideoUnity");

}
document.getElementById("closeButtonVideoUnity").onmousedown = function () {
  var box=document.getElementById("videoUnity");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
  pauseUnity();
};
///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("videoFlash"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.getElementById("videoFlash").onmousedown = function () {
  updatezdex("theVideoFlash");

}
document.getElementById("closeButtonVideoFlash").onmousedown = function () {
  var box=document.getElementById("videoFlash");
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  box.classList.add("hidden");
  pauseFlash();
};

///////////////////////////////////////////////////////////////////////////////
// Make the DIV element draggable:
dragElement(document.getElementById("theDemo"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//////////////////////////////////////////////////////////////
document.getElementById("catTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("catTmb");
    demoBox.classList.add("selected");
};

document.getElementById("catTmb").ondblclick = function () {
  updatezdex("theCat");
  var window=document.getElementById("mycat");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("visualArtTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("visualArtTmb");
    demoBox.classList.add("selected");
};
document.getElementById("visualArtTmb").ondblclick = function () {
  updatezdex("theVisualArt");
  var window=document.getElementById("visualArt");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("progTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("progTmb");
    demoBox.classList.add("selected");
};
document.getElementById("progTmb").ondblclick = function () {
  updatezdex("theProg");
  var window=document.getElementById("programming");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("webTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("webTmb");
    demoBox.classList.add("selected");
};
document.getElementById("webTmb").ondblclick = function () {
  updatezdex("theWeb");
  var window=document.getElementById("web");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("cvTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("cvTmb");
    demoBox.classList.add("selected");
};
document.getElementById("cvTmb").ondblclick = function () {
  updatezdex("theCV");
  var window=document.getElementById("cv");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("gameTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("gameTmb");
    demoBox.classList.add("selected");
};
document.getElementById("gameTmb").ondblclick = function () {
  window.open("http://etudiant-tim.cstj.qc.ca/1375687/Christmas");
  //updatezdex("theGame");
  //var window=document.getElementById("game");
  //window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("agrotourismeTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("agrotourismeTmb");
    demoBox.classList.add("selected");
};

document.getElementById("agrotourismeTmb").ondblclick = function() {
  window.open("http://etudiant-tim.cstj.qc.ca/1375687/agrotourisme/#g=1&p=accueil");
}

//////////////////////////////////////////////////////////////
document.getElementById("guideTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("guideTmb");
    demoBox.classList.add("selected");
};

document.getElementById("guideTmb").ondblclick = function() {
  window.open("http://etudiant-tim.cstj.qc.ca/1375687/GuideTV/");
}

//////////////////////////////////////////////////////////////
document.getElementById("roomTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("roomTmb");
    demoBox.classList.add("selected");
};

document.getElementById("roomTmb").ondblclick = function () {
  updatezdex("theRoom");
  var window=document.getElementById("room");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("peepTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("peepTmb");
    demoBox.classList.add("selected");
};

document.getElementById("peepTmb").ondblclick = function () {
  updatezdex("thePeep");
  var window=document.getElementById("peep");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("unityTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("unityTmb");
    demoBox.classList.add("selected");
};

document.getElementById("unityTmb").ondblclick = function () {
  updatezdex("theUnity");
  var window=document.getElementById("unity");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("conceptTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("conceptTmb");
    demoBox.classList.add("selected");
};

document.getElementById("conceptTmb").ondblclick = function () {
  updatezdex("theConcept");
  var window=document.getElementById("concept");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("videoTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("videoTmb");
    demoBox.classList.add("selected");
};

document.getElementById("videoTmb").ondblclick = function () {
  updatezdex("theVideo");
  var window=document.getElementById("video");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("unityfTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("unityfTmb");
    demoBox.classList.add("selected");
};

document.getElementById("unityfTmb").ondblclick = function () {
  updatezdex("theUnityf");
  var window=document.getElementById("unityf");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("flashTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("flashTmb");
    demoBox.classList.add("selected");
};

document.getElementById("flashTmb").ondblclick = function () {
  updatezdex("theFlash");
  var window=document.getElementById("flash");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("videoUnityTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("videoUnityTmb");
    demoBox.classList.add("selected");
};

document.getElementById("videoUnityTmb").ondblclick = function () {
  updatezdex("theVideoUnity");
  var window=document.getElementById("videoUnity");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////
document.getElementById("videoFlashTmb").onmousedown = function () {
  thumbs = document.getElementsByClassName("displayTmb")
  for(var i=0;i<thumbs.length;i++){
    thumbs[i].classList.remove("selected");
  }
  
  var demoBox=document.getElementById("videoFlashTmb");
    demoBox.classList.add("selected");
};

document.getElementById("videoFlashTmb").ondblclick = function () {
  updatezdex("theVideoFlash");
  var window=document.getElementById("videoFlash");
  window.classList.remove("hidden");
}

//////////////////////////////////////////////////////////////

document.getElementById("closeButtonVideoDemo").onmousedown = function () {
  var sound=new Audio("etc/sound/close.mp3")
  sound.play();
  var demoBox=document.getElementById("theDemo");
  demoBox.classList.add("hidden");
  var monVideo=document.getElementById("demoPlayer");
  monVideo.pause();
}

/////////////////////////////////////////////////////////////////
function updatezdex(theClassName){
  if(theClassName=="theCat"){
    var myCatZ=document.getElementById("mycat").style.zIndex;
    if(myCatZ!=zdex){
      zdex++
      document.getElementById("mycat").style.zIndex=zdex;
    }
  }else if(theClassName=="theVisualArt"){
    var myVisualZ=document.getElementById("visualArt").style.zIndex;
    if(myVisualZ!=zdex){
        zdex++
        document.getElementById("visualArt").style.zIndex=zdex;
    }
  }else if(theClassName=="theProg"){
    var myProgZ=document.getElementById("programming").style.zIndex;
    if(myProgZ!=zdex){
      zdex++
      document.getElementById("programming").style.zIndex=zdex;
    }
  }else if(theClassName=="theWeb"){
    var myWebZ=document.getElementById("web").style.zIndex;
    if(myWebZ!=zdex){
      zdex++
      document.getElementById("web").style.zIndex=zdex;
    }
  }else if(theClassName=="theCV"){
    var myCvZ=document.getElementById("cv").style.zIndex;
    if(myCvZ!=zdex){
      zdex++
      document.getElementById("cv").style.zIndex=zdex;
    }
  }else if(theClassName=="theGame"){
    var myGameZ=document.getElementById("game").style.zIndex;
    if(myGameZ!=zdex){
      zdex++
      document.getElementById("game").style.zIndex=zdex;
    }
  }else if(theClassName=="theRoom"){
    var myRoomZ=document.getElementById("room").style.zIndex;
    if(myRoomZ!=zdex){
      zdex++
      document.getElementById("room").style.zIndex=zdex;
    }
  }else if(theClassName=="thePeep"){
    var myRoomZ=document.getElementById("peep").style.zIndex;
    if(myRoomZ!=zdex){
      zdex++
      document.getElementById("peep").style.zIndex=zdex;
      document.getElementById("peepNext").addEventListener("click", function(){slide(true);});
      document.getElementById("peepPrev").addEventListener("click", function(){slide(false);});

    }
  }else if(theClassName=="theUnity"){
    var myRoomZ=document.getElementById("unity").style.zIndex;
    if(myRoomZ!=zdex){
      zdex++
      document.getElementById("unity").style.zIndex=zdex;
    }
}else if(theClassName=="theConcept"){
  var myRoomZ=document.getElementById("concept").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("concept").style.zIndex=zdex;
  }
}else if(theClassName=="theVideo"){
  var myRoomZ=document.getElementById("video").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("video").style.zIndex=zdex;
  }
}else if(theClassName=="theUnityf"){
  var myRoomZ=document.getElementById("unityf").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("unityf").style.zIndex=zdex;
  }
}else if(theClassName=="theFlash"){
  var myRoomZ=document.getElementById("flash").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("flash").style.zIndex=zdex;
  }
}else if(theClassName=="theVideoUnity"){
  var myRoomZ=document.getElementById("videoUnity").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("videoUnity").style.zIndex=zdex;
  }
}else if(theClassName=="theVideoFlash"){
  var myRoomZ=document.getElementById("videoFlash").style.zIndex;
  if(myRoomZ!=zdex){
    zdex++
    document.getElementById("videoFlash").style.zIndex=zdex;
  }
}
}

function slide(_foward){
  var imgPeep=document.getElementById("imgPeep");
  (_foward)?slideCounter++:slideCounter--;
  (slideCounter>3)?slideCounter=1:slideCounter=slideCounter;
  (slideCounter<1)?slideCounter=3:slideCounter=slideCounter;
  switch(slideCounter){
    case 1:imgPeep.src="etc/img/peep1.png";break;
    case 2:imgPeep.src="etc/img/peep2.png";break;
    case 3:imgPeep.src="etc/img/peep3.png";break;
  }
  console.log("bouge");
}
function pause(){
 var monVideo=document.getElementById("hook");
 monVideo.pause();
}
function pauseUnity(){
  var monVideo=document.getElementById("unityPlayer");
  monVideo.pause();
 }
 function pauseFlash(){
  var monVideo=document.getElementById("flashPlayer");
  monVideo.pause();
 }
document.getElementById('dispImg1').ondragstart = function() { return false; };
document.getElementById('dispImg2').ondragstart = function() { return false; };
