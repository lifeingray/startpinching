/*
JavaScript for Pinch
Author: Jesse Gray
*/
$(document).ready(function(){

	function rollDice(){
		return (Math.floor(Math.random()*6)+1);
	}	
	
	$('#navbar').scrollspy();

	
	$('.nav a[href*=#], .carousel-caption a[href*=#], .marketing a[href*=#]').click(function(){
		//var action = $(this).attr("class");
		if ($(this).attr("class") !== "noscroll")
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1000);
		else
		return false;
	});

	$('#story-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show');
	  $('#story-tabs a').removeClass('active');
	  $(this).addClass('active');
	  $('.neveractive').removeClass('active');	  
	})
	
	$('.nav a').click(function(){
		var url = $(this).attr("id");
		$('.nav li').removeClass('active');
		$(this).parent().addClass('active');
		// $('#load').load("content/" + url + ".html");
	});
	
	setInterval(function() {
	var card = ("#card" + rollDice());
	//console.log(card);
	//console.log($(card).css("marginTop"));
	  if ($(card).css("marginTop") !== "140px")
		$(card).animate({ "margin-top": "+=70px" }, "slow" );
	  else
		$(card).animate({ "margin-top": "-=140px" }, "slow" );
	}, 5000);
	$('.neveractive').removeClass('active');	
})