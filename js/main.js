alert('Stretch Break!');

setTimeout(function() {
	window.location.reload();
}, 30 * 60 * 1000); //30 minutes

var filteredList=[];
var neckList=[];
var backList=[];
var forearmList=[];
var eyeList=[];

//filters all exercises into groupArrays
	$.ajax({
		url:'js/tips.json',
		type:"GET",
		dataType:"json",
		success: function(response){
			console.log('start filtering');
			for (var i = 0; i < response.length; i++) {
				if(response[i].area.toLowerCase()=='neck'){
					neckList.push(response[i]);
					console.log('necklist done');
				}
				else if(response[i].area.toLowerCase()=='forearm'){
					forearmList.push(response[i]);
					console.log('forearm list done');
				}
				else if(response[i].area.toLowerCase()=='back'){
					backList.push(response[i]);
					console.log('back list done');
				}
					else if(response[i].area.toLowerCase()=='eye'){
					eyeList.push(response[i]);
					console.log('eye list done');
				}
			}
		}
	});

//passes user's area selection to stretch page
$('#timerStart').on('click', function(ev){
	ev.preventDefault();

	var filterValue=$('#focusArea').val();
	var url = 'stretch.html'+'#'+filterValue;
	console.log("The filterValue is "+filterValue);
	window.location = url;
});
//passing user parm in url
var filterListOn=location.hash.split('#')[1];

//formats tip on page
	var formatTip=function(title,descrArray,imgSrc,source){
		$('.tipName').text(title);
		$('.tip-wrapper img').attr('src',imgSrc);
		$('.tip-wrapper a').attr('href',source);
		$('.tip-wrapper a').text(source);

		for (var i = 0; i < descrArray.length; i++) {
			//console.log('starting desciprtion');
			$('.tipIntructions').append('<li>');
			$('.tipIntructions li').last().text(descrArray[i]);
		}
		$('.tip-wrapper').append($('#newTip'));
	}


//select the filtered list according to user selection
	$.ajax({
		url: 'js/tips.json',
		type:"GET",
		dataType: "json",
		success: function(response){
			console.log('jsonnnnn connected');
			if (filterListOn=='neck') {
			filteredList=neckList;
			getRandomTip();
			} else if (filterListOn=='back') {
			filteredList=backList;
			getRandomTip();
			} else if (filterListOn=='forearm') {
			filteredList=forearmList;
			getRandomTip();
			} else if (filterListOn=='eye') {
			filteredList=eyeList;
			getRandomTip();
			} else {
				for (var i = 0; i < response.length; i++) {
					filteredList.push(response[i]);
				}
				getRandomTip();
			}
		}
	});

//chooses a random tip and calls format fxn with it
	function getRandomTip(){
		var n=(Math.floor((Math.random())*filteredList.length));
		var tipObject=(filteredList[n]);
		formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	}

$('#newTip').on('click',function(){
	window.location.reload();
})










