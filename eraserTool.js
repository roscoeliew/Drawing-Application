//Start on written code without any assistance
function eraserTool() 
{
    this.name = "eraserTool"; //Name of the Drawing Tool
    this.icon = "assets/eraser.png"; //Icon of the Drawing Tool
    
    sizeSlider = createSlider(3,100,20); //Creating a slider to define the size of the stamp
    sizeSlider.parent("#sizeOfEraser"); //Linking it to the parent in Index File

    select("#sizeOfEraser").hide();  //Hide the parent div for sizeSlider

    this.draw = function()
    {
        if(mouseIsPressed) //Draw when the mouse is pressed
        {
            noStroke(); //No stroke on the ellipse
            fill(backgroundColour); //Fill the ellipse with the background colour
            ellipse(mouseX,mouseY,sizeSlider.value()); //Creating an ellipse, overlapping on the drawing
        }
    }

    this.setCursor = function() 
    {
        cursor(CROSS); //Set the cursor to a cross
    }
}
//End of written code without assistance
