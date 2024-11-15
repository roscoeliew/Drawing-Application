function Kaleidoscope() 
{
    this.name = "kaleidoscope"; //Name of the Drawing Tool
    this.icon = "assets/kaleidoscope.png"; //Icon of the Drawing Tool
    
    let symmetrySlider = createSlider(2,10,5); //Creating a slider to define the symmetry
    symmetrySlider.parent("#symmetry"); //Linking it to the parent in Index File
    
    select("#symmetry").hide();   // Hide the parent div for symmetrySlider

    this.draw = function()
    {
        
        this.angle = 360 / symmetrySlider.value() //Define angle based on the number of symmetries

        if (mouseIsPressed) {
            stroke(currentDrawColour);
            this.mx = mouseX;   //Coordinates of current mouse position on x-axis
            this.my = mouseY;   //Coordinates of current mouse position on y-axis
            this.pmx = pmouseX; //Coordinates of previous mouse position on x-axis
            this.pmy = pmouseY; //Coordinates of previous mouse position on y-axis
            
            this.centerX = width / 2;  //Centre position of x-axis
            this.centerY = height / 2; //Centre position of y-axis
            
            translate(this.centerX, this.centerY); //mouseX and mouseY translate to the centre of canvas
            
            for (let i = 0; i < symmetrySlider.value(); i++) //Looping through the number of symmetries
            {
                rotate(this.angle); //Rotate the canvas based on the angle of symmetry
                strokeWeight(2);    //Stroke weight of the line
                line(this.mx - this.centerX, this.my - this.centerY, this.pmx - this.centerX, this.pmy - this.centerY);
                push();       //Store transformation to stack
                scale(1, -1); //Flip the canvas on the y-axis
                line(this.mx - this.centerX, this.my - this.centerY, this.pmx - this.centerX, this.pmy - this.centerY);
                pop();        //Retrieve transformation from stack to canvas
            }
        }
    }
}
