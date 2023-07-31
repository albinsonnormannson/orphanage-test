
function openGaleri(evt, blogname) {

  var i, cardgaleri, btngaleri;
  cardgaleri = document.getElementsByClassName("cardgaleri");
  for (i = 0; i < cardgaleri.length; i++) {
    cardgaleri[i].style.display = "none";
  }
  btngaleri = document.getElementsByClassName("btngaleri");
  for (i = 0; i < btngaleri.length; i++) {
    btngaleri[i].className = btngaleri[i].className.replace(" active", "");
  }
  document.getElementById(blogname).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("galerifirst").click();
