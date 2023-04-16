const myImage = document.getElementsByClassName("img");

var myIndex = 0;

function changeImage() {
  var i;
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > myImage.length) {myIndex = 1}    
  myImage[myIndex-1].style.display = "block";  
  setTimeout(changeImage, 3000);    
}

function init(){
  // myImage[3].style.display = "block";  
  for (i = 0; i < myImage.length; i++) {
    myImage[i].style.display = "none";  
  }
  changeImage();
}

function zelle_click(){
  const content = "shanehaddad.snh@gmail.com";
  navigator.clipboard.writeText(content)
  .then(() => {
    alert("Zelle recipient info has copied to clipboard.")
  })
  .catch(err => {
    console.log('Something went wrong', err);
});
  
}

init();