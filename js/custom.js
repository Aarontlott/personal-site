var Custom = (function() {

	function init() {

		initTyper();
		// sizeBackground();
	}



	function initTyper() {

		$(function () {
	      $.typer.options.typeSpeed = 130;
	      $('.whoami').typeTo("whoami");
	      setTimeout("$.typer.options.typeSpeed = 10;", 1990);
	      // setTimeout("$.typer.options.typeSpeed = 100;", 3500);
	      // setTimeout("$.typer.options.typeSpeed = 10;", 13000);

	      var time = 2000;

	      var bodyText1 = "$('.body1').typeTo('Name: Aaron Lott');";
	      var bodyText2 = "$('.body2').typeTo('Occupation: Web Developer / Web Systems Director');";
	      var bodyText3 = "$('.body3').typeTo('Skills: Open source full stack');";
	      var bodyText7 = "$('.body7').typeTo('Find me: GitHub, LinkedIn');";
	      var bodyText4 = "$('.body4').typeTo('Location: Fife, Scotland');";
	      var loading = "$('.loading').typeTo('Status Report: Happy to be back in Scotland :)');";
	      var finish = "$('.body5').typeTo(' -- [Report complete] --');";
	      var loading2 = "$('.loading2').typeTo('--------------------------------');";
	      var finish2 = "$('.body6').typeTo('Contact me at aarontlott@gmail.com.');";

	      setTimeout(bodyText1, time);
	      setTimeout(bodyText2, time + 400);
	      setTimeout(bodyText3, time + 600);
	      setTimeout(bodyText7, time + 800);
	      setTimeout(bodyText4, time + 1000);
	      setTimeout(loading, time + 1100);
	      setTimeout(finish, time + 1300);
	      setTimeout(loading2, time + 1500);
	      setTimeout(finish2, time + 1700);
	      setTimeout(function(){
	      	var txt = $('.body7').text();

	      	var new_txt = txt.replace("GitHub",'<a target="_blank" href="https://github.com/Aarontlott">GitHub</a>');
	      	new_txt = new_txt.replace("LinkedIn",'<a target="_blank" href="https://www.linkedin.com/in/aaron-lott-594bb776/">LinkedIn</a>');

	      	$('.body7').html(new_txt);

	      }, 4500);

	    });

	}
	// function sizeBackground() {
	// 	var height = $('.terminal').height();
	// 	$('.terminal').css('min-height',height+50);
	// }

	return {
		init:init
	};

})();