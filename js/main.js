//debugger
//alert('Stretch Break!');

//pass area parm from index page
console.log(filterValue);


//this works- displaying tip on page
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


//trying to filter types of stretches, passes parm
$('#timerStart').on('click', function(ev){
	ev.preventDefault();

	filterValue=$('#focusArea').val();
	var url = 'stretch.html'+'#'+filterValue;
	console.log("The filterValue is "+filterValue);
	window.location = url;
});

//redefine filtervalue on second page by passing parm from index
var filterValue='all'; //give default
var filterListOn=location.hash.split('#')[1];
console.log('filterValue is:',filterValue,'| filterListOn : ',filterListOn);
var filteredList=[];
var neckList=[];
var backList=[];
var forearmList=[];
var tipObject={};



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
				if(response[i].area.toLowerCase()=='forearm'){
					forearmList.push(response[i]);
					console.log('forearm list done');
				}
				if(response[i].area.toLowerCase()=='back'){
					backList.push(response[i]);
					console.log('back list done');
				}
			}
		}
	});


//now present list according to user selection
//connect to json
//parms: title,descrArray,imgSrc,source
	$.ajax({
		url: 'js/tips.json',
		type:"GET",
		dataType: "json",
		success: function(response){
			console.log('jsonnnnn connected');
			if (filterListOn=='neck') {
			filteredList=neckList;
			getRandomTip();
			}
			if (filterListOn=='back') {
			filteredList=backList;
			getRandomTip();
			}
			if (filterListOn=='forearm') {
			filteredList=forearmList;
			getRandomTip();
			}
			else{
				for (var i = 0; i < response.length; i++) {
					filteredList.push(response[i]);
					getRandomTip();
					console.log(response[i]);
				}
				
			}
		}
	});


var tipObject={};
var n=0; //default

	function getRandomTip(){
		n=(Math.floor((Math.random())*filteredList.length));
		tipObject=(filteredList[n]);
		formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	}

	//formatTip(tipObject.name,tipObject.instructions,tipObject.img,tipObject.source);
	//formatTip('name of stretch',[1,2,3],'img/02.jpg','www.google.com');
	















