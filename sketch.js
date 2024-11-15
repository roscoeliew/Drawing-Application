//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var colourPicker = null;

var pickerColour;

function setup() 
{
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	colourPicker = new ColourPicker(); // Initialize your ColourPicker tool

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new stampTool());
	toolbox.addTool(new fillTool());
	toolbox.addTool(new eraserTool());
	toolbox.addTool(new Kaleidoscope());
	background(255);

	angleMode(DEGREES);
}

function draw() 
{
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) 
	{
		toolbox.selectedTool.draw();
	} else 
	{
		alert("it doesn't look like your tool has a draw method!");
	}
}