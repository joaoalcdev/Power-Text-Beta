

// FUNÇÃO = COPIAR TEXTO DO MODELO 01

function copiarum() {
  let textarea = document.getElementById("textoum");
  textarea.select();
  document.execCommand("copy");
}


//FUNÇÃO = DOWNLOAD DE ARQUIVO DO MODELO 01
function baixarum(textToWrite, fileNameToSaveAs) {
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



// FUNÇÃO = COPIAR TEXTO DO MODELO 02

function copiardois() {
    let textarea = document.getElementById("textodois");
    textarea.select();
    document.execCommand("copy");
  }
  
  
  //FUNÇÃO = DOWNLOAD DE ARQUIVO DO MODELO 02
  function baixardois(textToWrite, fileNameToSaveAs) {
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
  

  
// FUNÇÃO = COPIAR TEXTO DO MODELO 03

function copiartres() {
    let textarea = document.getElementById("textotres");
    textarea.select();
    document.execCommand("copy");
  }
  
  
  //FUNÇÃO = DOWNLOAD DE ARQUIVO DO MODELO 03
  function baixartres(textToWrite, fileNameToSaveAs) {
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
  

  // FUNÇÃO = COPIAR TEXTO DO MODELO 04

function copiarquatro() {
    let textarea = document.getElementById("textoquatro");
    textarea.select();
    document.execCommand("copy");
  }
  
  
  //FUNÇÃO = DOWNLOAD DE ARQUIVO DO MODELO 04
  function baixarquatro(textToWrite, fileNameToSaveAs) {
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
  