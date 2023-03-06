var mySong = new Audio("buga.mp3")
var bugaSmall=new Audio("buga small.mp3")
var jeLenuOpe=new Audio("jelenu ope.mp3")
var ojoOlaMi=new Audio("ojo ola mi.mp3")
var failSong = new Audio("Eyi ki se opin.mp3")
var ayeLe=new Audio("Aye le.mp3")
var myLastSong = new Audio("e-shock-you.mp3")
function check() {
if (grade.value >=74 && grade.value<101) {   
display.innerHTML='<h3><b>EXCELLENT!<br> A1</br></b></h3>'
mySong.play()
bugaSmall.pause()
jeLenuOpe.pause()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
myLastSong.pause()
display.style.color = "green"   
} 
if (grade.value <75  && grade.value>=70) {
display.innerHTML='<h3><b>VERY GOOD!<br>B2</br></b></h3>'
mySong.play()
bugaSmall.pause()
jeLenuOpe.pause()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
myLastSong.pause()
display.style.color = "blue" 
}
if (grade.value <70 && grade.value>=65) {
display.innerHTML='<h3><b>GOOD!<br>B3</br></b></h3>'   
bugaSmall.play()
mySong.pause()
jeLenuOpe.pause()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
myLastSong.pause()
display.style.color = "blue" 
}
if (grade.value <65 && grade.value>=60) {
display.innerHTML='<h3><b>CREDIT!<br>C4</br></b></h3>'
bugaSmall.play()
mySong.pause()
jeLenuOpe.pause()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
myLastSong.pause()
display.style.color = "yellow" 
}
if (grade.value <60 && grade.value>=55) {
display.innerHTML='<h3><b>CREDIT!<br>C5</br></b></h3>'
jeLenuOpe.play()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
mySong.pause()
bugaSmall.pause()
myLastSong.pause()
display.style.color = "yellow" 
}
if (grade.value <55 && grade.value>=50) {
display.innerHTML='<h3><b>CREDIT!<br>C6</br></b></h3>'
jeLenuOpe.play()
ojoOlaMi.pause()
failSong.pause()
ayeLe.pause()
mySong.pause()
bugaSmall.pause()
myLastSong.pause()
display.style.color = "aqua" 
}
if (grade.value <50 && grade.value>=46) {
display.innerHTML='<h3><b>PASS!<br>D7</br></b></h3>'
ojoOlaMi.play()
jeLenuOpe.pause()
failSong.pause()
ayeLe.pause()
mySong.pause()
bugaSmall.pause()
myLastSong.pause()
display.style.color = "aqua" 
}
if (grade.value <46 && grade.value>=40) {
display.innerHTML='<h3><b>PASS!<br>E8</br></b></h3>'
failSong.play()
ayeLe.pause()
mySong.pause()
bugaSmall.pause()
myLastSong.pause()
ojoOlaMi.pause()
jeLenuOpe.pause()
display.style.color = "red" 
}
if (grade.value <40 && grade.value >=1) {
display.innerHTML='<h3><b>FAIL!<br>F9</br></b></h3>'
ayeLe.play()
mySong.pause()
bugaSmall.pause()
myLastSong.pause()
ojoOlaMi.pause()
jeLenuOpe.pause()
failSong.pause()
display.style.color = "red" 
}
if (grade.value >=101||grade.value<0) {
myLastSong.play()
display.innerHTML='<h3><b>ENTER SCORE  WITHIN THE RANGE OF 1-100 <b></h3>'
ayeLe.pause()
mySong.pause()
bugaSmall.pause()
ojoOlaMi.pause()
jeLenuOpe.pause()
failSong.pause()
display.style.color = "red" 
}
if (grade.value=="") {
display.innerHTML='<h3><b>ENTER SCORE<b></h3>'
display.style.color = "red" 
}
}