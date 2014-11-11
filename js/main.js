$(document).ready(){
	alert('Stretch Break!');

	var formatTip=function(tipName,tipDescription,tipPicSrc){
		$('.tipName').text(tipName);
		$('.tip.wrapper').append('img').attr('src',tipPicSrc);
		for (var i = 0; i < tipDescription.length; i++) {
			$('.wrapper').append('<li>').text(tipDescription[i]);
		}
	}


	var getJSONtip= $.getJSON( "tips.json", function(e) {
		var tipNum=Math.floor(Math.random()*3)+1;
		var tipName= tips[tipNum].name;
		var tipPicSrc=tips[tipNum].img;
		var tipDescription=[];
		for (var i = 0; i < tips[tipNum].instructions.length; i++) {
		 	tipDescription.push(tips[tipNum].instructions[i]);
		 };
		

		formatTip(tipName,tipDescription,tipPicSrc);
	});

	getJSONtip();
 



//sandbox below
	var getJSONtip= function(){
		$.ajax({
			url: 'tips.json',
			type: "GET",
			dataType: "json",
			success: function(response) {
				for(var i=0; i<response.tasks.length; i++) {
					formatTip(response.tasks[i]);
				}
			}
		});
	}





}



   

function timeRefresh(timeoutPeriod) 
{
	setTimeout("location.reload(true);",timeoutPeriod);
}

