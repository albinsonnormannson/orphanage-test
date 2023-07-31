function openTentang(evt, blogname) {

  var i, cardtentangkami, btntabstentang;
  cardtentangkami = document.getElementsByClassName("cardtentangkami");
  for (i = 0; i < cardtentangkami.length; i++) {
    cardtentangkami[i].style.display = "none";
  }
  btntabstentang = document.getElementsByClassName("btntabstentang");
  for (i = 0; i < btntabstentang.length; i++) {
    btntabstentang[i].className = btntabstentang[i].className.replace(" active", "");
  }
  document.getElementById(blogname).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("bukadulu").click();
