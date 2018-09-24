
function changeColors(){
  

  var myParagraph = document.getElementById("changedText")
  var redValue = parseInt(document.getElementById("redBorder").value, 10);
  var greenValue = parseInt(document.getElementById("greenBorder").value, 10);
  var blueValue = parseInt(document.getElementById("blueBorder").value, 10);
  var width = parseInt(document.getElementById("borderWidth").value, 10) + "px";
  myParagraph.style.border = ""+width+" solid rgb("+redValue+","+greenValue+","+blueValue+")";
  
  redValue = parseInt(document.getElementById("redBackground").value, 10);
  greenValue = parseInt(document.getElementById("greenBackground").value, 10);
  blueValue = parseInt(document.getElementById("blueBackground").value, 10);
  myParagraph.style.backgroundColor = "rgb("+redValue+","+greenValue+","+blueValue+")";
}
