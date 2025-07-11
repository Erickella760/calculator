for( let number = 3; number <=19; number++) {
document.getElementsByTagName("input")[number].addEventListener("click", function() {
  document.getElementById("screen").value += document.getElementsByTagName("input")[number].value
})
}

// for AC button
document.getElementsByTagName("input")[1].addEventListener("click", function() {
  document.getElementById("screen").value = ""
})


//for DEL button
document.getElementsByTagName("input")[2].addEventListener("click", function() {
  document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
})

// the code below is for the eqaul to btn
document.getElementsByTagName("input")[20].addEventListener("click", function() {
  document.getElementById("screen").value = eval(document.getElementById("screen").value);
})