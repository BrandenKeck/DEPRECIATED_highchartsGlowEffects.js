/**Highcharts Glow Effects
Last Update: Fall 2017
Author: Branden Keck
www.brandenkeck.com
你好，世界*/

/**Copyright (c) <2016> <Branden Keck>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

//Globally Stored Variables.  Sets effect colors / which are selected / chart data
var hgeStoreColor = new Array();
var hgeCurrColor = new Array();
var hgeIsSelected = new Array();
var hgeUserInterval = new Array();
var hgeCharts = new Array();
var hgeChartNumber = -1;

//If unrecognized, [Array].indexOf(element) is added as a prototype operation
//Used to return -1 for elements that do not yet exist
$(function(){
	if (!Array.prototype.indexOf){
		Array.prototype.indexOf = function(searchValue, index) {
			var len = this.length >>> 0;
			index |= 0;
			if (index < 0){index = Math.max(len - index, 0);}
			else if (index >= len){return -1;}
			if (searchValue === undefined)
				do {
					if (index in this && this[index] === undefined){return index;}
				} while (++index !== len)
			else
				do {
					if (this[index] === searchValue){return index;}
				} while (++index !== len)
			return -1;
		};
	}
});

//These six functions are those called by the user to set effects for an entire chart
function hgeAddHoverRainbow(myChart, f1, f2){hgeInitialize(false, 1, false, undefined, null, null, myChart, f1, f2);}
function hgeAddSelectRainbow(myChart, f1, f2){hgeInitialize(true, 1, false, undefined, null, null, myChart, f1, f2);}
function hgeAddHoverFlash(myChart, color, f1, f2){hgeInitialize(false, 2, false, color, null, null, myChart, f1, f2);}
function hgeAddSelectFlash(myChart, color, f1, f2){hgeInitialize(true, 2, false, color, null, null, myChart, f1, f2);}
function hgeAddHoverBlink(myChart, color, f1, f2){hgeInitialize(false, 3, false, color, null, null, myChart, f1, f2);}
function hgeAddSelectBlink(myChart, color, f1, f2){hgeInitialize(true, 3, false, color, null, null, myChart, f1, f2);}
function hgeAddHoverPlain(myChart, color, f1, f2){hgeInitialize(false, 4, false, color, null, null, myChart, f1, f2);}
function hgeAddSelectPlain(myChart, color, f1, f2){hgeInitialize(true, 4, false, color, null, null, myChart, f1, f2);}

//The following six functions are  called by the user to set effects for individual datapoints
function hgeAddIndividualHoverRainbow(myChart, row, col, f1, f2){hgeInitialize(false, 1, true, undefined, row, col, myChart, f1, f2);}
function hgeAddIndividualSelectRainbow(myChart, row, col, f1, f2){hgeInitialize(true, 1, true, undefined, row, col, myChart, f1, f2);}
function hgeAddIndividualHoverFlash(myChart, row, col, color, f1, f2){hgeInitialize(false, 2, true, color, row, col, myChart, f1, f2);}
function hgeAddIndividualSelectFlash(myChart, row, col, color, f1, f2){hgeInitialize(true, 2, true, color, row, col, myChart, f1, f2);}
function hgeAddIndividualHoverBlink(myChart, row, col, color, f1, f2){hgeInitialize(false, 3, true, color, row, col, myChart, f1, f2);}
function hgeAddIndividualSelectBlink(myChart, row, col, color, f1, f2){hgeInitialize(true, 3, true, color, row, col, myChart, f1, f2);}
function hgeAddIndividualHoverPlain(myChart, row, col, color, f1, f2){hgeInitialize(false, 4, true, color, row, col, myChart, f1, f2);}
function hgeAddIndividualSelectPlain(myChart, row, col, color, f1, f2){hgeInitialize(true, 4, true, color, row, col, myChart, f1, f2);}

//The following function clears all effects from a chart
function hgeClearChart(chart){
	var fourside = hgeCheckCharts(chart); //[0] Does chart exist? [1] If so, what is its index? (If not, null)
	if(fourside[0]){
		for(var i=0; i<chart.series.length; i++){
			for(j=0; j<chart.series[i].data.length; j++){
				hgeDefaultSettings(chart, i, j);
				hgeRemoveGlowColor(fourside[1], i, j);
			}
		}
		hgeCharts.splice(fourside[1], 1);
		hgeIsSelected.splice(fourside[1], 1);
		hgeStoreColor.splice(fourside[1], 1);
		//hgeCurrColor.splice(fourside[1], 1);
		hgeUserInterval.splice(fourside[1], 1);
	}else{
		console.log("Error: Could not clear nonexistant chart")
	}
}

function hgeInitialize(iTrigger, mTrigger, gTrigger, color, row, col, chart, f1, f2){
	
		var fourside = hgeCheckCharts(chart); //[0] Does chart exist? [1] If so, what is its index? (If not, null)

		//If the chart has not been initialized, create space for it
		//Else if the chart was initialized and a new effect is being applied to the whole chart
		if(!fourside[0]){
			hgeChartNumber++;
			var c = hgeChartNumber;
			hgePushCharts(chart);
			for(var i=0; i<chart.series.length; i++){
				hgePushRows(c);
				for(j=0; j<chart.series[i].data.length; j++){
					hgePushColumns(chart, c, i, j);
					if(!gTrigger){
						hgeSetGlowColor(c, i, j, mTrigger, color);
						if(iTrigger){hgeInitSelect(chart, c, i, j, f1, f2);}
						else{hgeInitHover(chart, c, i, j, f1, f2);}
					}
				}
			}
		}else if(!gTrigger){
			for(var i=0; i<chart.series.length; i++){
				for(j=0; j<chart.series[i].data.length; j++){
					hgeSetGlowColor(c, i, j, mTrigger, color);
					if(iTrigger){hgeInitSelect(chart, c, i, j, f1, f2);}
					else{hgeInitHover(chart, c, i, j, f1, f2);}
				}
			}
		}
		
		//Whether the the chart was initialized or not
		//Applies or overwrites effect on single data points
		if(gTrigger){
			var c = hgeChartNumber;
			hgeSetGlowColor(c, row, col, mTrigger, color);
			if(iTrigger){hgeInitSelect(chart, c, row, col, f1, f2);}
			else{hgeInitHover(chart, c, row, col, f1, f2);}
		}
	
}

//The next two functions update chart information appropriately
function hgeInitHover(chart, c, i, j, f1, f2){
	if(f1 == undefined){f1 = function(){};}
	if(f2 == undefined){f2 = function(){};}
	chart.series[i].data[j].update({
		events: {
			mouseOver: function(){
				hgeLogSelection(c, this.series.index, this.index, this.color, f1, f2);
			},
			mouseOut: function(){
				hgeLogSelection(c, this.series.index, this.index, this.color, f1, f2);
			},
		},
	});
	chart.series[i].update({
		states: {
			hover: {
				enabled: false,
			}
		}
	});
}

function hgeInitSelect(chart, c, i, j, f1, f2){
	if(f1 == undefined){f1 = function(){};}
	if(f2 == undefined){f2 = function(){};}
	chart.series[i].data[j].update({
		events: {
			click: function(event){
				hgeLogSelection(c, this.series.index, this.index, this.color, f1, f2);      
			},
		},
	});
	chart.series[i].update({
		allowPointSelect: false,
		states: {
			select: {
				enabled: false,
			}
		}
	});
}

function hgeDefaultSettings(chart, i, j){
	chart.series[i].data[j].update({
		events: {
			mouseOver: null,
			mouseOut: null,
			click: null
		},
	});
	chart.series[i].update({
		states: {
			hover: {
				enabled: true,
			},
			select: {
				enabled: true,
			}
		}
	});
	
}

//Checks if chart has been initialized
function hgeCheckCharts(c){
	var check = hgeCharts.indexOf(c);
	if(check == -1){
		return [false, null];
	}else{return [true, check];}
}

//Next three functions push information to globals
function hgePushCharts(chart){
	hgeCharts.push(chart);
	hgeIsSelected.push([]);
	hgeStoreColor.push([]);
	hgeCurrColor.push([]);
	hgeUserInterval.push([]);
}

function hgePushRows(c){
	hgeIsSelected[c].push([]);
	hgeStoreColor[c].push([]);
	hgeCurrColor[c].push([]);
	hgeUserInterval[c].push([]);
}

function hgePushColumns(myChart, c, i, j){
	hgeIsSelected[c][i].push(false);
	hgeStoreColor[c][i].push(myChart.series[i].data[j].color);
	hgeCurrColor[c][i].push(myChart.series[i].data[j].color);
	hgeUserInterval[c][i].push([]);
}

function hgeSetGlowColor(c, k, x, type, choice){
	var onett = 0;
	var twoson = 0;
	var threed = 0;
	var ness = 0;
	var jeff = 0;
	var cHex = "#000000";
	
	
	var ogHex = hgeHexToRgb(hgeStoreColor[c][k][x]);
	if(ogHex==undefined){
		var hexFind;
		hexFind=hgeStoredColorValues(hgeStoreColor[c][k][x]);
		ogHex = hgeHexToRgb(hexFind);
	}
	if(ogHex==undefined){
		ogHex = hgeHexToRgb("#000000");
	}
	
	if(choice == undefined){choice = "#FFFFFF";}
	var newHex = hgeHexToRgb(choice);
	if(newHex==undefined){
		var hexFind;
		hexFind=hgeStoredColorValues(choice);
		newHex = hgeHexToRgb(hexFind);
	}
	if(newHex==undefined){
		newHex = hgeHexToRgb("#FFFFFF");
	}
		
	switch(type){
		case 1:
			hgeSI1 = setInterval(function(){
				onett+=1;
				if(onett>200){onett=0;}
				twoson+=1;
				if(twoson>350){twoson=0;}
				threed+=1;
				if(threed>500){threed=0;}
				red = parseInt(Math.abs(220*Math.sin(2*onett/200*Math.PI)));
				green = parseInt(Math.abs(220*Math.sin(2*(twoson)/350*Math.PI)));
				blue = parseInt(Math.abs(220*Math.sin(2*(threed)/500*Math.PI)));
				hgeCurrColor[c][k][x] = hgeRGBToHex(red, green, blue);
			}, 20);
		break;
		case 2:
			hgeSI2 = setInterval(function(){
				ness+=1;
				if(ness>100){ness=0;}
				jeff = Math.abs(Math.sin(2*Math.PI*ness/100));
				red = parseInt(((1 - jeff) * newHex.r) + (jeff * ogHex.r));
				green = parseInt(((1 - jeff) * newHex.g) + (jeff * ogHex.g));
				blue = parseInt(((1 - jeff) * newHex.b) + (jeff * ogHex.b));
				hgeCurrColor[c][k][x] = hgeRGBToHex(red, green, blue);
			}, 20);
		break;
		case 3:
			hgeSI3 = setInterval(function(){
				if(ness == 0){
					hgeCurrColor[c][k][x] = hgeRGBToHex(newHex.r, newHex.g, newHex.b);
					ness = 1;
				}
				else{
					hgeCurrColor[c][k][x] = hgeRGBToHex(ogHex.r, ogHex.g, ogHex.b);
					ness = 0;
				}
			}, 400);
		break;
		case 4:
			hgeCurrColor[c][k][x] = hgeRGBToHex(newHex.r, newHex.g, newHex.b);
		break;
	}
}

function hgeGetGlowColor(c, k, x){
	hgeUserInterval[c][k][x] = setInterval(function(){
		hexColor = hgeCurrColor[c][k][x];
		hgeCharts[c].series[k].data[x].update({color: hexColor});
	}, 10);
}

function hgeRemoveGlowColor(c, k, x){
	clearInterval(hgeUserInterval[c][k][x]);
	hgeCharts[c].series[k].data[x].update({color: hgeStoreColor[c][k][x]});
}

function hgeLogSelection(c, k, x, color, onSelect, onUnselect){
	
	if(!hgeIsSelected[c][k][x]){
		hgeIsSelected[c][k][x] = true;
		hgeGetGlowColor(c, k, x);
		if(hgeIsAFunction(onSelect)){onSelect();}
		else{console.log("Error: function not found");}
	}
	else{
		hgeIsSelected[c][k][x] = false;
		hgeRemoveGlowColor(c, k, x);
		if(hgeIsAFunction(onUnselect)){onUnselect();}
		else{console.log("Error: function not found");}
	}
			
}

function hgeGetSelected(){
	var hgeSelected = [];
	for(var b=0; b<hgeIsSelected.length; b++){
		for(var m=0; m<hgeIsSelected[b].length; m++){
			for(var k=0; k<hgeIsSelected[b][m].length; k++){
				if(hgeIsSelected[b][m][k]){
					hgeSelected.push({'chart': hgeCharts[b], 'series': m, 'point': k});
				}
			}
		}
	}
	
	return hgeSelected;
}

/**Code below this point was recreated using similar code from stackoverflow.com
and is being redistributed in this free plug-in within the terms of the creative
commons license*/

function hgeIsAFunction(checkMe) {
	var eString = {};
	return checkMe && eString.toString.call(checkMe) === '[object Function]';
}

function hgeRGBToHex(r, g, b) {
    return "#" + hgeComponentToHex(r) + hgeComponentToHex(g) + hgeComponentToHex(b);
}

function hgeComponentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function hgeHexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16)} : null;
}

function hgeStoredColorValues(c){
	var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colours[c.toLowerCase()] != 'undefined'){
        return colours[c.toLowerCase()];
	}
}

/*window.onload = function(){
	hgeChartNumber = 0;
}*/