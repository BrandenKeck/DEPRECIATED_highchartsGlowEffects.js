# highchartsGlowEffects.js  
A plug-in for highcharts.js that allows the user to add glowing effects to hover and select events  
jsfiddle Demo Link:  [Full Demo](https://jsfiddle.net/BrandenKeck/7r7fg093/)  
self-hosted Link:  [HTML-facing Demo](http://www.brandenkeck.com/res/downloads/hge/Demos/hgeDemo.html)  
download link:  [View/Copy Code](http://www.brandenkeck.com/res/downloads/hge/highchartsGlowEffects.js)  
  
**Warning: using these functions will disable allowPointSelect, select events, and hover events**  
**Select and hover events can be passed in the form of a function using the plug-in modules**  
**You may chose to not pass functions and colors.  In this case, the parameter will be ignored**  
**To use this plug-in, place the desired effect function (found below) anywhere after the chart is added in javascript**  

# Getting the Selected Points  
## hgeGetSelected() will return an object with properties of the selected points
+ set a variable equal to the function
+ variable[i].chart will return the chart for the ith selection
+ variable[i].series will return the series index for the ith selection
+ variable[i].point will return the point index for the ith selection
+ NOTE: for bar/column charts variable[i].point returns the x-axis index
  
# Clearing Effects from a chart
## hgeClearChart(*chart*) will remove all effects applied to a given chart using this module
+ pass your chart in the form of $("#chartContainer").highcharts(); 
+ NOTE:  this programatically restores Highcharts default values
  
# Select Modules  

## Basic Info:  
+ These modules will add specified effects to a data point on select (on click)
+ Hold down "Shift" or "Ctrl" to select multiple points.  The desired effect will be added to all points selected.
+ These work best if used on bar, column, or pie charts
  
### hgeAddSelectRainbow(*chart*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will constantly change the color of the data point while the point is selected
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualSelectRainbow(*chart*, *seriesIndex*, *dataIndex*, *onSelectFunction()*, *offSelectFunction()*);
+ this variation adds the same effect to an individual data point
  
### hgeAddSelectFlash(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when a point is selected
+ if no color is chosen a default color will be set
+ "Flash" means that the color change will be gradual
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualSelectFlash(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point
  
### hgeAddSelectBlink(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen a point is selected
+ if no color is chosen a default color will be set
+ "Blink" means that the color changes will be instant
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualSelectBlink(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point
  
### hgeAddSelectPlain(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function applies a simple select effect of unchanging color
+ if no color is chosen a default color will be set
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualSelectPlain(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point
  
# Hover Modules  

## Basic Info:  
+ These modules will add specified effects to a data point on hover
+ These work best if used on bar, column, or pie charts
  
### hgeAddHoverRainbow(*chart*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will constantly change the color of the data point while hovering
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualHoverRainbow(*chart*, *seriesIndex*, *dataIndex*, *onSelectFunction()*, *offSelectFunction()*);
+ this variation adds the same effect to an individual data point
  
### hgeAddHoverFlash(*chart*, *color*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when hovering
+ if no color is chosen a default color will be set
+ "Flash" means that the color change will be gradual
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualHoverFlash(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point
  
### hgeAddHoverBlink(*chart*, *color*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when hovering
+ if no color is chosen a default color will be set
+ "Blink" means that the color changes will be instant
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis  
#### hgeAddIndividualHoverBlink(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point

### hgeAddHoverPlain(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function applies a simple select effect of unchanging color
+ if no color is chosen a default color will be set
+ pass your chart in the form of $("#chartContainer").highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
#### hgeAddIndividualHoverPlain(*chart*, *seriesIndex*, *dataIndex*, *color* *onSelectFunction()*, *offSelectFunction()*);  
+ this variation adds the same effect to an individual data point
