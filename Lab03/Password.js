function validateBoxes(){
  var firstBoxTag = document.getElementById("firstBox").value;
  var secondBoxTag = document.getElementById("secondBox").value;
  if(firstBoxTag.length < 8){
    alert("password less than 8 characters");
  }
  else if(secondBoxTag != firstBoxTag){
    alert("passwords don't match");
  }
  else{
    alert("password validated");
  }
}
