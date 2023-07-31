window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}



$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.tutup').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'tutup' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });



    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});






$('#mandiri').on('click', function() {

	var text = '1350010095899';

	var tempElement = $('<input>').val(text).appendTo('body').select();
	document.execCommand('copy');
	tempElement.remove();


});
$('#bri').on('click', function() {

	var text = '750201002345530';

	var tempElement = $('<input>').val(text).appendTo('body').select();
	document.execCommand('copy');
	tempElement.remove();


});
$('#bni').on('click', function() {

	var text = '0146367893';

	var tempElement = $('<input>').val(text).appendTo('body').select();
	document.execCommand('copy');
	tempElement.remove();


});
$('#bca').on('click', function() {

	var text = '2471700616';

	var tempElement = $('<input>').val(text).appendTo('body').select();
	document.execCommand('copy');
	tempElement.remove();


});

$('#jateng').on('click', function() {

	var text = '3093065891';

	var tempElement = $('<input>').val(text).appendTo('body').select();
	document.execCommand('copy');
	tempElement.remove();


});
function suksescopas(){
    Swal.fire(
      'Terimakasih',
      'Berhasil Menyalin',
      'success'
  )
}
  document.getElementById("defaultOpen").click();
