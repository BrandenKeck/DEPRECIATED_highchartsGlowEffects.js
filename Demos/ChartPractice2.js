$(function () {	
    $('#outputChart').highcharts({
        chart: {type: 'column',
		zoomType: ''},
        title: {text: 'Some Data'},
        xAxis: {type: 'category',
		categories: ['something', 'another', 'a third', 'last one']},
        yAxis: {title: {text: 'A Y-Axis Title'}},
        series: [{
			name: "A Series",
			data: [50,40,30,20,10]},{
			name: "The Series",
			data: [80,50,10,20,10]},
		{name: "Another One",
		data: [10,20,23,31,60]}],
    });

/**	###############################################################*/
/**	###*/hgeAddSelectRainbow($('#outputChart').highcharts());/**###*/
/**	###############################################################*/

});

$(function () {	
    $('#outputChart2').highcharts({
        chart: {type: 'bar',
		zoomType: ''},
        title: {text: 'Some Data'},
        xAxis: {type: 'category',
		categories: ['something', 'another', 'a third', 'last one']},
        yAxis: {title: {text: 'A Y-Axis Title'}},
        plotOptions: {
		series: {
			allowPointSelect: true,
		}},
        series: [{
			name: "A Series",
			data: [10,40,30,90,50]}],
    });
	
/**	########################################################################*/
/**	###*/hgeAddSelectBlink($('#outputChart2').highcharts(), "#000000");/**###*/
/**	########################################################################*/

});

$(function () {	
    $('#outputChart3').highcharts({
        chart: {type: 'pie',
		zoomType: ''},
        title: {text: 'Some Data'},
        xAxis: {type: 'category',
		categories: ['something', 'another', 'a third', 'last one']},
        yAxis: {title: {text: 'A Y-Axis Title'}},
        plotOptions: {
		series: {
			allowPointSelect: true,
		}},
        series: [{
			name: "A Series",
			data: [50,40,30,20,10]}],
    });
	
/**	###################################################################################*/
/**	###*/hgeAddSelectFlash($('#outputChart3').highcharts(), "red");/**###*/
/**	###################################################################################*/

});