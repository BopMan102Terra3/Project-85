canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

green_car_width = 75;
green_car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

green_car_x = 5;
green_car_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag = uploadBackground;
	background_imgTag = background_image;

	background_imgTag = new Image();
	background_imgTag = uploadgreencar;
	background_imgTag = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(background_imgTag, green_car_x, green_car_y, green_car_width, green_car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0){
	greencar_y = greencar_y - 10;
	console.log("When up arrow is pressed, x = " + green_car_x + " y =" + green_car_y);
	uploadBackground();
	uploadgreencar();
	}
}


function down()
{
	if(greencar_y <= 500){
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, x = " + green_car_x + " y =" + green_car_y)
		uploadBackground();
		uploadgreencar();
}
}

function left()
{
	if(greencar_x >= 0){
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed, x = " + green_car_x + " y =" + green_car_y)
		uploadBackground();
		uploadgreencar();
}
}

function right()
{
	if(greencar_x <= 700){
		greencar_x = greencar_x + 10;
		console.log("When right arrow is pressed, x = " + green_car_x + " y =" + green_car_y)
		uploadBackground();
		uploadgreencar();
	}
}