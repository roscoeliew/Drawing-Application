function stampTool()
{
    this.name = "stampTool"; //Name of the Drawing Tool
    this.icon = "assets/dog.svg"; //Icon of the Drawing Tool
    
    //Load Image from assets folder
    let dog = loadImage('./assets/dog.svg'); 
    let cat = loadImage('./assets/cat.svg');
    let bear = loadImage('./assets/bear.svg');
    let duck = loadImage('./assets/duck.svg');

    let sizeSlider = createSlider(3,50,20); //Creating a slider to define the size of the stamp
    sizeSlider.parent("#sizeOfStamps"); //Linking it to the parent in Index File
    
    let nSlider = createSlider(3,50,20); //Creating a slider to define the number of stamps on the canvas
    nSlider.parent("#numberOfStamps"); //Linking it to the parent in Index File

    let dropDown = createSelect(); //Creating a dropdown menu to select the stamp
    dropDown.parent("stampStyle"); //Linking it to the parent in Index File

    //Adding options to the dropdown menu
    dropDown.option("Dog"); 
    dropDown.option("Cat");
    dropDown.option("Bear");
    dropDown.option("Duck");

    let style = dropDown.value(); //Defining the value of the dropdown menu

    this.SelectEvent = function() //Change the stamp when the dropdown menu is changed
    {
        style = dropDown.value();
    }

    dropDown.changed(this.SelectEvent); //Calling the function when the dropdown menu is changed

    select("#sizeOfStamps").hide();   // Hide the parent div for sizeSlider
    select("#numberOfStamps").hide(); // Hide the parent div for nSlider
    select("#stampStyle").hide();     // Hide the parent div for dropDown

    this.draw = function()
    {
        if(mouseIsPressed) //Draw when mouse is pressed 
        {
            for(var i = 0; i < nSlider.value(); i++) //Looping through base on the input from nSlider
            {
                let stampSize = sizeSlider.value();
                let stampX = mouseX - stampSize/2;
                let stampY = mouseY - stampSize/2;

                let chosenImage;
                switch (style) {
                    case "Dog":
                        chosenImage = dog;
                        break;
                    case "Cat":
                        chosenImage = cat;
                        break;
                    case "Bear":
                        chosenImage = bear;
                        break;
                    case "Duck":
                        chosenImage = duck;
                        break;
                }
                
                image(chosenImage, stampX, stampY, stampSize, stampSize); //Print the image on the canvas
            }
        }
	}
}
