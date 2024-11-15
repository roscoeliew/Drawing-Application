//Start on written code without any assistance
let backgroundColour = 255; //Initial background colour of the canvas
function fillTool()
{	
	this.name = "fillTool"; //Name of the Drawing Tool
	this.icon = "assets/filltool.png"; //Icon of the Drawing Tool

	this.draw = function()
    {
        
		if(mouseIsPressed) //draw when the mouse is pressed
        {
            fill(currentDrawColour); //Sets the fill colour to the colour selected from the colour palette or the colour picker
            ellipse(mouseX,mouseY,5000,5000); //Creates an ellipse covering the whole canvas acting as a fill color on the canvas
            backgroundColour = currentDrawColour; //sets the background colour to the colour selected from the colour palette or the colour picker
        }   
	}
}
//End of written code without assistance