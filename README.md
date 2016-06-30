# highchartsGlowEffects.js  
A plug-in for highcharts.js that allows the user to add glowing effects to hover and select events  
jsfiddle Hover Example Link:  [Hover Example](https://jsfiddle.net/BrandenKeck/ro0j4qp0/1/)  
jsfiddle Select Example Link:  [Select Example](https://jsfiddle.net/BrandenKeck/j1d807zg/6/)  
  
*Warning: using these functions will disable allowPointSelect, select events, and hover events*  
*Select and hover events can be passed in the form of a function using the plug-in modules*  
*To use this plug-in, place the desired effect function (found below) anywhere after the chart is added in javascript*  
  
# Hover Modules  

##Basic Info:  
+ These modules will add specified effects to a data point on hover
+ These work best if used on bar, column, or pie charts
  
###hgeAddHoverRainbow(*chart*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will constant change the color of the data point while hovering
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass functions using only the function name without parenthesis
  
###hgeAddHoverFlash(*chart*, *color*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when hovering
+ if no color is chosen a default color will be set
+ "Flash" means that the color change will be gradual
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
  
###hgeAddHoverBlink(*chart*, *color*, *onHoverFunction()*, *offHoverFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when hovering
+ if no color is chosen a default color will be set
+ "Blink" means that the color changes will be instant
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
  
# Select Modules  

##Basic Info:  
+ These modules will add specified effects to a data point on select (on click)
+ Hold down "Shift" or "Ctrl" to select multiple points.  The desired effect will be added to all points selected.
+ These work best if used on bar, column, or pie charts
  
###hgeAddSelectRainbow(*chart*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will constant change the color of the data point while the point is selected
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass functions using only the function name without parenthesis
  
###hgeAddSelectFlash(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen when a point is selected
+ if no color is chosen a default color will be set
+ "Flash" means that the color change will be gradual
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
  
###hgeAddSelectBlink(*chart*, *color*, *onSelectFunction()*, *offSelectFunction()*);  
+ this function will cause the data point to change color between an initial color and one chosen a point is selected
+ if no color is chosen a default color will be set
+ "Blink" means that the color changes will be instant
+ pass your chart in the form of $("#chartContainer).highcharts();  
+ pass color as a hex value or shortcut (i.e. "red").  Do not use rgb, etc.
+ pass functions using only the function name without parenthesis
