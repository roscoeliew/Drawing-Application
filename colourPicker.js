let currentDrawColour = '#000000'; // Setting default color to black
function ColourPicker() 
{
	this.colourPicker = createColorPicker(currentDrawColour); // Create colour picker
	this.colourPicker.parent("colourPicker"); // Link to parent in index.html

    this.draw = function()
    {
        currentDrawColour = this.colourPicker.value(); // Update the current draw color using the color picker value
        stroke(currentDrawColour); // Set the stroke color to the current draw color

        if (mouseIsPressed) 
        {
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }

    this.loadColours = function() // Update the stroke color when the color picker value changes
    {
        this.colourPicker.input(() => // Event Listener
        {
            currentDrawColour = this.colourPicker.value();
        });
	};

	this.loadColours(); // Call the loadColours function
}
    