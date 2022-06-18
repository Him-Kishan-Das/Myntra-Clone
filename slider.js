var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 3500);
  var x;
  const img = document.getElementsByClassName("nxtimg");
  for(x = 0; x < img.length; x++){
    img[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > img.length){indexValue = 1}
  img[indexValue -1].style.display = "block";
}
slideShow();