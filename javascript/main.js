// FUNÇÃO DE AÇÃO = EDITAR TEXTO / CONTROL Z KEY / TAB PARAGRAFO

const textarea = document.querySelector("#textbox");
textarea.addEventListener('keydown', function (event) {
    const cursor = textarea.selectionStart;
    if(event.key == "Tab"){
        event.preventDefault();
        document.execCommand("insertText", false, '\t');//appends a tab and makes the browser's default undo/redo aware and automatically moves cursor
    } else if (event.key == "Enter") {
        event.preventDefault();
        document.execCommand("insertText", false, '\n');
    }
});




// FUNÇÃO = COPIAR TEXTO 

function copy() {
  let textarea = document.getElementById("textbox");
  textarea.select();
  document.execCommand("copy");
}




// FUNÇÃO = BOTÃO PARA COLOCAR LETRAS MAIUSCULAS

function uppercase() {
  
    var elements = document.querySelectorAll("textarea[type=text]")
    for (var i = 0, element; element = elements[i++];) {
       element.value = (element.value).toUpperCase();
    }
}





// FUNÇÃO = BOTÃO PARA COLOCAR LETRAS MINUSCULAS
function lowercase() {
    var elements = document.querySelectorAll("textarea[type=text]")
    for (var i = 0, element; element = elements[i++];) {
       element.value = (element.value).toLowerCase();
    }
}



  // FUNÇÃO = PRIMEIRA LETRA DE CADA PALAVRA MAIÚSCULA
function titlecase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}



  // FUNÇÃO = PRIMEIRA LETRA DE CADA PALAVRA MINÚSCULA
  function reversetitlecase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase();
      }
    );
  }
  


// FUNÇÃO = LIMPAR CAMPO DE TEXTO
let btnClear = document.querySelector("#clear");
let inputs = document.querySelectorAll("#textbox");
 
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});



// FUNÇÃO = PRIMEIRA LETRA DE CADA SENTENÇA MAIÚSCULA
function firstLetterUpper(textbox) {
	var newString = textbox.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}
 function convertToSentenceCase() {
  var textbox = document.getElementById('textbox').value;
  //alert(textbox);
  var newString = firstLetterUpper(textbox);
  //console.log("Converted: "+newString);
  document.getElementById('textbox').value = newString;
}






// FUNÇÃO = BUTTON UNDO

const mementos = []
const input = document.querySelector('textarea')
function saveMemento() {
  mementos.push(input.value)
}
function undo() {
  const lastMemento = mementos.pop()
   
  input.value = lastMemento ? lastMemento : input.value
}



//FUNÇÃO = UNDO / REDO 
var doc, bod, I, StateMaker; // for use on other loads
addEventListener('load', function(){
doc = document; bod = doc.body;
I = function(id){
  return doc.getElementById(id);
}
StateMaker = function(initialState){
  var o = initialState;
  if(o){
    this.initialState = o; this.states = [o];
  }
  else{
    this.states = [];
  }
  this.savedStates = []; this.canUndo = this.canRedo = false; this.undoneStates = [];
  this.addState = function(state){
    this.states.push(state); this.undoneStates = []; this.canUndo = true; this.canRedo = false;
    return this;
  }
  this.undo = function(){
    var sl = this.states.length;
    if(this.initialState){
      if(sl > 1){
        this.undoneStates.push(this.states.pop()); this.canRedo = true;
        if(this.states.length < 2){
          this.canUndo = false;
        }
      }
      else{
        this.canUndo = false;
      }
    }
    else if(sl > 0){
      this.undoneStates.push(this.states.pop()); this.canRedo = true;
    }
    else{
      this.canUndo = false;
    }
    return this;
  }
  this.redo = function(){
    if(this.undoneStates.length > 0){
      this.states.push(this.undoneStates.pop()); this.canUndo = true;
      if(this.undoneStates.length < 1){
        this.canRedo = false;
      }
    }
    else{
      this.canRedo = false;
    }
    return this;
  }
  this.save = function(){
    this.savedStates = this.states.slice();
    return this;
  }
  this.isSavedState = function(){ // test to see if current state in use is a saved state
    if(JSON.stringify(this.states) !== JSON.stringify(this.savedStates)){
  return false;
}
return true;
  }
}
var text = I('textbox'), val, wordCount = 0, words = 0, stateMaker = new StateMaker, save = I('save');
text.onkeyup = function(e){
  save.className = undefined; val = this.value.trim(); wordCount = val.split(/\s+/).length;
  if(wordCount === words && stateMaker.states.length){
    stateMaker.states[stateMaker.states.length-0] = val;
  }
  else{
    stateMaker.addState(val); words = wordCount;
  }
}
I('undo').onclick = function(){
  stateMaker.undo(); val = text.value = (stateMaker.states[stateMaker.states.length-1] || '').trim();
  text.focus();
  save.className = stateMaker.isSavedState() ? 'save' : undefined;
}
I('redo').onclick = function(){
  stateMaker.redo(); val = text.value = (stateMaker.states[stateMaker.states.length-1] || '').trim();
  text.focus();
  save.className = stateMaker.isSavedState() ? 'save' : undefined;
}

});


//FUNÇÃO = DOWNLOAD DE ARQUIVO
function saveTextAsFile(textToWrite, fileNameToSaveAs) {
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
  // Chrome allows the link to be clicked
  // without actually adding it to the DOM.
  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else {
  // Firefox requires the link to be added to the DOM
  // before it can be clicked.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  }
   
  downloadLink.click();
}




/* BOTAO INSERIR CARACTERE = →*/
function setTextToCurrentPos1() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " → " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ⇨ */
function setTextToCurrentPos2() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ⇨ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ⇝ */
function setTextToCurrentPos3() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ⇝ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ◆ */
function setTextToCurrentPos4() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ◆ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ✦ */
function setTextToCurrentPos5() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ✦ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ← */
function setTextToCurrentPos6() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ← " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ⇦ */
function setTextToCurrentPos7() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ⇦ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ⇜ */
function setTextToCurrentPos8() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ⇜ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ◈ */
function setTextToCurrentPos9() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + "  ◈ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ✧ */
function setTextToCurrentPos10() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ✧  " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = · */
function setTextToCurrentPos11() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " · " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = ◦ */
function setTextToCurrentPos12() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " ◦ " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = • */
function setTextToCurrentPos13() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
x.slice(0, curPos) + " • " + x.slice(curPos));
}



/* BOTAO INSERIR CARACTERE = • */
function setTextToCurrentPos14() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
  x.slice(0, curPos) + "❝" + x.slice(curPos));
}




/* BOTAO INSERIR CARACTERE = • */
function setTextToCurrentPos15() {
  var curPos = 
      document.getElementById("textbox").selectionStart;
  console.log(curPos);
  let x = $("#textbox").val();
  let text_to_insert = $("#insert").val();
  $("#textbox").val(
  x.slice(0, curPos) + "❞" + x.slice(curPos));
}


/* CONTADOR DE CARACTERE */

let total_count = '';
let text_count_content = $('#text_count').html(total_count + '0 Caracteres');

$('#textbox').keyup(function(){
  let length = $('#textbox').val().length;
  let remaining = total_count + length;
$('#text_count').html(' ' + remaining + ' Caracteres');
});



// CONTADOR DE PALAVRA

$(document).ready(function() {
  $("#textbox").on('keyup', function() {
    var words = 0;

    if ((this.value.match(/\S+/g)) != null) {
      words = this.value.match(/\S+/g).length;
    }

    if (words > 999999999) {
      // Split the string on first 200 words and rejoin on spaces
      var trimmed = $(this).val().split(/\s+/, 999999999).join(" ");
      // Add a space at the end to make sure more typing creates new words
      $(this).val(trimmed + " ");
    }
    else {
      $('#display_count').text(words+"  Palavras");
    }
  });
}); 



// FUNÇÃO = EMOJI SELECT / EMOJI INPUT / NUNCA APAGAR
$('#1, #10').click(function(e){
  insereSinal('#textbox', e.target.textContent);
});

function insereSinal(cId, sinal){
  var cam = $(cId)[0];
  var cvl = $(cam).val();
  var cps = cam.selectionStart;
  var ini = cvl.substring(0, cps);
  var fim = cvl.substring(cps, cvl.length);
  $(cam).val(ini+sinal+fim);
  cps += sinal.length;
  cam.selectionStart = cam.selectionEnd = cps;
  cam.focus();
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})







var body = document.body,
overlay = document.querySelector('.overlay'),
overlayBtts = document.querySelectorAll('button[class$="overlay"]');

[].forEach.call(overlayBtts, function(btt) {

btt.addEventListener('click', function() { 
 
 /* Detect the button class name */
 var overlayOpen = this.className === 'open-overlay';
 
 /* Toggle the aria-hidden state on the overlay and the 
    no-scroll class on the body */
 overlay.setAttribute('aria-hidden', !overlayOpen);
 body.classList.toggle('noscroll', overlayOpen);
 
 /* On some mobile browser when the overlay was previously
    opened and scrolled, if you open it again it doesn't 
    reset its scrollTop property */
 overlay.scrollTop = 0;

}, false);

});




// CURSOR TEXTO

// create enumeration object for repeated class names
const CLASSES = {
  marker: 'input__marker',
  visible: 'input__marker--visible' };


const createMarker = (content, modifier) => {
  // create a marker for the input
  const marker = document.createElement('div');
  marker.classList.add(CLASSES.marker, `${CLASSES.marker}--${modifier}`);
  marker.textContent = content;
  return marker;
};

/**
 * returns x, y coordinates for absolute positioning of a span within a given text input
 * at a given selection point
 * @param {object} input - the input element to obtain coordinates for
 * @param {number} selectionPoint - the selection point for the input
 */
const getCursorXY = (input, selectionPoint) => {
  const {
    offsetLeft: inputX,
    offsetTop: inputY } =
  input;
  // create a dummy element that will be a clone of our input
  const div = document.createElement('div');
  // get the computed style of the input and clone it onto the dummy element
  const copyStyle = getComputedStyle(input);
  for (const prop of copyStyle) {
    div.style[prop] = copyStyle[prop];
  }
  // we need a character that will replace whitespace when filling our dummy element if it's a single line <input/>
  const swap = '.';
  const inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value;
  // set the div content to that of the textarea up until selection
  const textContent = inputValue.substr(0, selectionPoint);
  // set the text content of the dummy element div
  div.textContent = textContent;
  if (input.tagName === 'TEXTAREA') div.style.height = 'auto';
  // if a single line input then the div needs to be single line and not break out like a text area
  if (input.tagName === 'INPUT') div.style.width = 'auto';
  // create a marker element to obtain caret position
  const span = document.createElement('span');
  // give the span the textContent of remaining content so that the recreated dummy element is as close as possible
  span.textContent = inputValue.substr(selectionPoint) || '.';
  // append the span marker to the div
  div.appendChild(span);
  // append the dummy element to the body
  document.body.appendChild(div);
  // get the marker position, this is the caret position top and left relative to the input
  const { offsetLeft: spanX, offsetTop: spanY } = span;
  // lastly, remove that dummy element
  // NOTE:: can comment this out for debugging purposes if you want to see where that span is rendered
  document.body.removeChild(div);
  // return an object with the x and y of the caret. account for input positioning so that you don't need to wrap the input
  return {
    x: inputX + spanX,
    y: inputY + spanY };

};

/**
 * shows a position marker that highlights where the caret is
 * @param {object} e - the input or click event that has been fired
 */
const showPositionMarker = e => {
  console.log(e);
  // grab the input element
  const { currentTarget: input } = e;
  // create a function that will handle clicking off of the input and hide the marker
  const processClick = evt => {
    if (e !== evt && evt.target !== e.target) {
      toggleMarker();
    }
  };
  // create a function that will toggle the showing of the marker
  const toggleMarker = () => {
    input.__IS_SHOWING_MARKER = !input.__IS_SHOWING_MARKER;

    if (input.__IS_SHOWING_MARKER && !input.__MARKER) {
      // assign a created marker to input
      input.__MARKER = createMarker("⚡", 'position');
      // append it to the body
      document.body.appendChild(input.__MARKER);
      document.addEventListener('click', processClick);
    } else {
      document.body.removeChild(input.__MARKER);
      document.removeEventListener('click', processClick);
      input.__MARKER = null;
    }
  };
  // if the marker isn't showing, show it
  if (!input.__IS_SHOWING_MARKER) toggleMarker();
  // if the marker is showing, update its position
  if (input.__IS_SHOWING_MARKER) {
    // grab the properties from the input that we are interested in
    const {
      offsetLeft,
      offsetTop,
      offsetHeight,
      offsetWidth,
      scrollLeft,
      scrollTop,
      selectionEnd } =
    input;
    // get style property values that we are interested in
    const { lineHeight, paddingRight } = getComputedStyle(input);
    // get the caret X and Y from our helper function
    const { x, y } = getCursorXY(input, selectionEnd);
    // set the marker positioning
    // for the left positioning we ensure that the maximum left position is the width of the input minus the right padding using Math.min
    // we also account for current scroll position of the input
    const newLeft = Math.min(
    x - scrollLeft,
    offsetLeft + offsetWidth - parseInt(paddingRight, 10));

    // for the top positioning we ensure that the maximum top position is the height of the input minus line height
    // we also account for current scroll position of the input
    const newTop = Math.min(
    y - scrollTop,
    offsetTop + offsetHeight - parseInt(lineHeight, 10));

    input.__MARKER.setAttribute('style', `left: ${newLeft}px; top: ${newTop}px`);
  }
};


// grab instance of different inputs
const getPositionInput = document.querySelector('.get-position-input');
const getPositionTextArea = document.querySelector('.get-position-textarea');
const getSelectionTextArea = document.querySelector('.get-selection-textarea');
const getSelectionInput = document.querySelector('.get-selection-input');
const showCustomUIInput = document.querySelector('.show-custom-ui-input');
const showCustomUITextArea = document.querySelector('.show-custom-ui-textarea');
// bind event listeners to the different text inputs
//getPositionInput.addEventListener('input', showPositionMarker);
//getPositionInput.addEventListener('click', showPositionMarker);

getPositionTextArea.addEventListener('input', showPositionMarker)
getPositionTextArea.addEventListener('click', showPositionMarker)




/* COOKIE */

const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "Cookie PowerText=PowerText; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("O cookie não pode ser definido! Desbloqueie este site da configuração de cookies do seu navegador.");
  }
}
let checkCookie = document.cookie.indexOf("Cookie PowerText=PowerText"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");


