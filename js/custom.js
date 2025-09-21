/* 

Author: Aaron Rierson-Lott
Date: 2025-09-21
Description: Slick typing content for the personal site

License: You're welcome to use this code, but I'm not sure why I'm still using it. Nostalgia, I guess.

*/

var Custom = (function () {

	function init() {
		initTyper();
	}


	function initTyper() {
		$(function () {
			$.typer.options.typeSpeed = 130;
			$('.whoami').typeTo("whoami");
			setTimeout("$.typer.options.typeSpeed = 10;", 1990);

			var time = 2000;

			var name = "$('.body1').typeTo('Name: Aaron Rierson-Lott');";
			var occupation = "$('.body2').typeTo('Occupation: Senior front end engineer, Outplay Entertainment');";
			var skills = "$('.body3').typeTo('Skills: Turning complex problems into simple, useful systems');";
			var findMyWork = "$('.body4').typeTo('Find my work: GitHub, Itch.io, novels');";
			var location = "$('.body5').typeTo('Location: Fife, Scotland');";
			var status = "$('.loading').typeTo('Status Report: Making stuff again, and it feels great :D');";
			var reportComplete = "$('.body6').typeTo(' -- [Report complete] --');";
			var loadingBar = "$('.loading2').typeTo('--------------------------------');";
			var contactMe = "$('.body7').typeTo('You can contact me at aarontlott@gmail.com or find me on LinkedIn');";

			// Screams in modern web development...
			setTimeout(name, time);
			setTimeout(occupation, time + 400);
			setTimeout(skills, time + 600);
			setTimeout(findMyWork, time + 800);
			setTimeout(location, time + 1000);
			setTimeout(status, time + 1100);
			setTimeout(reportComplete, time + 1300);
			setTimeout(loadingBar, time + 1500);
			setTimeout(contactMe, time + 1700);
			setTimeout(function () {
				var txt = $('.body4').text();

				var new_txt = txt.replace("GitHub", '<a target="_blank" href="https://github.com/Aarontlott">GitHub</a>');
				new_txt = new_txt.replace("novels", '<a target="_blank" href="https://mybook.to/TheMachinaSeries">novels</a>');
				new_txt = new_txt.replace("Itch.io", '<a target="_blank" href="https://haldron.itch.io/">Itch.io</a>');

				$('.body4').html(new_txt);

			}, 4500);
			setTimeout(function () {
				var contactTxt = $('.body7').text();
				var newContactTxt = contactTxt.replace("LinkedIn", '<a target="_blank" href="https://www.linkedin.com/in/aaron-rierson-lott-594bb776/">LinkedIn</a>');
				$('.body7').html(newContactTxt);
			}, 5500);
			// Why would I do the effect like this? xD
		});
	}

	return {
		init: init
	};

})();
