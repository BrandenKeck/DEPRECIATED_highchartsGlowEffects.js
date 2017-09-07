$(function () {	

////////////////////////////////////////Example 1/////////////////////////////////////////////

//The chart must be initialized before effects are applied
$('#firstExample').highcharts({
	chart: {type: 'bar',
	zoomType: ''},
	title: {text: 'Example 1'},
	xAxis: {type: 'category',
	categories: ['something', 'another', 'a third', 'last one']},
	yAxis: {title: {text: 'A Y-Axis Title'}},
	plotOptions: {
	series: {
		allowPointSelect: true,
	}},
	series: [{
		name: "A Series",
		data: [70,40,30,90]}],
});
	
/**	######################################################################## **/
/**	###########   Plug-in Information for Example 1 Begins Here  ########### **/
/**	######################################################################## **/

//The following statements display the different effects possible by adding them to individual points...
//To add an effect to an individual "selected" datapoint use the template "hgeAddIndividualSelect______(...)"

//Options are:
//		Rainbow - varies colors automatically, takes argruments:
//				(chart, series_index, data_point, on_select_function, off_select_function)
//		Flash - varies colors gradually between original color and a new, user-defined color, takes argruments
//				(chart, series_index, data_point, color, on_select_function, off_select_function)
//		Blink - abruptly alternates between original color and a user-defined color, takes arguments:
//				(chart, series_index, data_point, color, on_select_function, off_select_function)
//		Plain - adds a plain, user-defined effect to selected items
//				(chart, series_index, data_point, color, on_select_function, off_select_function)

//Notes:
//		If no function is specified, the parameter is ignored
//		Colors can be entered as hexidecimal or common color names
//		Both series and point indicies begin at 0.  If only on series is present, it is series 0.
//		Unfortunately, at this time only function names can be passed.  Therefore, the functions passed must take not arguments.
//			(i.e. in the example below, the functions 'logSelectMessage' and 'logUnselectMessage' are passed - they're located at the end of this document)
//			(these functions are only applied for data points '1' and '3'.  click the series named 'another' and 'last one' to see messages logged in the console)

hgeAddIndividualSelectRainbow($('#firstExample').highcharts(), 0, 0);
hgeAddIndividualSelectFlash($('#firstExample').highcharts(), 0, 1, "red", logSelectMessage, logUnselectMessage);
hgeAddIndividualSelectBlink($('#firstExample').highcharts(), 0, 2, "#000000");
hgeAddIndividualSelectPlain($('#firstExample').highcharts(), 0, 3, "#34FF10", logSelectMessage, logUnselectMessage);

/**	######################################################################## **/
/**	############   Plug-in Information for Example 1 Ends Here  ############ **/
/**	######################################################################## **/

////////////////////////////////////////Example 2/////////////////////////////////////////////

//Initialization of second chart
$('#secondExample').highcharts({
	chart: {type: 'column',
	zoomType: ''},
	title: {text: 'Example 2'},
	xAxis: {type: 'category',
	categories: ['something', 'another', 'a third', 'last one']},
	yAxis: {title: {text: 'A Y-Axis Title'}},
	plotOptions: {
	series: {
		allowPointSelect: true,
	}},
	series: [{
		name: "A Series",
		data: [50,40,50,40]}],
});

/**	######################################################################## **/
/**	###########   Plug-in Information for Example 2 Begins Here  ########### **/
/**	######################################################################## **/

//The following statement displays how to apply an effect to an entire chart
//To add a "select" individual datapoint use the template "hgeAddSelect______(...)"

//Options are as listed above, but take different arguments:
//		Rainbow - varies colors automatically, takes argruments:
//				(chart, on_select_function(), off_select_function())
//		Flash - varies colors gradually between original color and a new, user-defined color, takes argruments
//				(chart, color, on_select_function(), off_select_function())
//		Blink - abruptly alternates between original color and a user-defined color, takes arguments:
//				(chart, color, on_select_function(), off_select_function())
//		Plain - adds a plain, user-defined effect to selected items
//				(chart, color, on_select_function(), off_select_function())

hgeAddSelectRainbow($('#secondExample').highcharts());

/**	######################################################################## **/
/**	############   Plug-in Information for Example 2 Ends Here  ############ **/
/**	######################################################################## **/

////////////////////////////////////////Example 3/////////////////////////////////////////////

$('#thirdExample').highcharts({
	chart: {type: 'pie',
	zoomType: ''},
	title: {text: 'Example 3'},
	xAxis: {type: 'category',
	categories: ['something', 'another', 'a third', 'last one']},
	yAxis: {title: {text: 'A Y-Axis Title'}},
	plotOptions: {
	series: {
		allowPointSelect: true,
	}},
	series: [{
		name: "A Series",
		data: [50,40,50,40]}],
});

/**	######################################################################## **/
/**	###########   Plug-in Information for Example 3 Begins Here  ########### **/
/**	######################################################################## **/

//To apply a hover effect to an individual point, use the same format as those in examples 1 and 2 except:
//		Replace the word "Select" with the rule "Hover" in the function name
//			1. "hgeAddIndividualHover______()" will add effects to individual points
//				args: (chart, series_index, data_point, color [except Rainbow], on_hover_function(), off_hover_function())
//			2. "hgeAddHover______(...)" will apply an effect to the whole chart
//				args: (chart, color [except Rainbow], on_hover_function(), off_hover_function())
//		The same effects are rules still apply as they did before...
//		(i.e. the following adds an effect to the entire chart as well as onhover and offhover functions)


hgeAddHoverFlash($('#thirdExample').highcharts(), "#880077", logHoverMessage, logUnhoverMessage);

/**	######################################################################## **/
/**	############   Plug-in Information for Example 3 Ends Here  ############ **/
/**	######################################################################## **/

////////////////////////////////////////Example 4/////////////////////////////////////////////

$('#fourthExample').highcharts({
	chart: {type: 'column',
	zoomType: ''},
	title: {text: 'Example 4'},
	xAxis: {type: 'category',
	categories: ['something', 'another', 'a third', 'last one']},
	yAxis: {title: {text: 'A Y-Axis Title'}},
	plotOptions: {
	series: {
		allowPointSelect: true,
	}},
	series: [{
		name: "A Series",
		data: [10,30,40,30,10,30,40,30,10]}],
});

/**	######################################################################## **/
/**	###########   Plug-in Information for Example 4 Begins Here  ########### **/
/**	######################################################################## **/

//To show off the application of individual hover effects, I created a fun iterative example:

//First I want to define a ray with colors to use (this could be done programatically):
var colors = ["#FFFFFF", "#FF0000", "#FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF", "000000"]

//Next I iterate through the array adding to each datapoint "i" the color "colors[i]"
//Note: a more practical application would be to interate over the datapoints adding colors based on size of the data
for(i=0; i<colors.length; i++){
	hgeAddIndividualHoverFlash($('#fourthExample').highcharts(), 0, i, colors[i]);
}

/**	######################################################################## **/
/**	############   Plug-in Information for Example 4 Ends Here  ############ **/
/**	######################################################################## **/

});

function tabulate(){
	var variable;
	variable = hgeGetSelected();
	console.log(variable);
}

function removeEffects(){
	hgeClearChart($('#fourthExample').highcharts());
}

function logSelectMessage(){
	console.log("New point selected");
}

function logUnselectMessage(){
	console.log("Previously selected point has been deselected");
}

function logHoverMessage(){
	console.log("New point hovered");
}

function logUnhoverMessage(){
	console.log("Previously hovered point is no longer being hovered");
}