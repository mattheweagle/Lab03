var currentPic = 0;
var picArray = ["clicked1.png","clicked2.png","clicked3.png","clicked4.png","clicked5.png"];
function previousPicture(){
  if(currentPic == 0){
    currentPic = 4;
  }
  else{
    currentPic = currentPic-1;
  }

  document.getElementById("myPicture").src = picArray[currentPic];
}
function nextPicture(){
  if(currentPic == 4){
    currentPic = 0;
  }
  else{
    currentPic = currentPic+1;
  }

  document.getElementById("myPicture").src = picArray[currentPic];
}
