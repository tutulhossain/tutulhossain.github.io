var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'my-photo1.jpg') {
      myImage.setAttribute ('src','my-photo2.jpg');
    } else if(mySrc === 'my-photo2.jpg') {
      myImage.setAttribute ('src','my-photo3.png');
    }else{
        myImage.setAttribute ('src','my-photo1.jpg');
    }
}
var myButton = document.querySelector('.button2');
var myHeading = document.querySelector('a');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'My Name is, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'My Name is, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
