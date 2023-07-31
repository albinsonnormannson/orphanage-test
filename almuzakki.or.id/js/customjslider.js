

$(document).ready(function(){
  $('.carousel').carousel({
    interval: 3000
  })
});



function openBlog(evt, blogname) {
  var i, cardblog, btnblog;
  cardblog = document.getElementsByClassName("cardblog");
  for (i = 0; i < cardblog.length; i++) {
    cardblog[i].style.display = "none";
  }
  btnblog = document.getElementsByClassName("btnblog");
  for (i = 0; i < btnblog.length; i++) {
    btnblog[i].className = btnblog[i].className.replace(" active", "");
  }
  document.getElementById(blogname).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("bukasatu").click();
