
function Cell(i,j,w)
{
	this.i= i;
	this.j =j;
	this.x=i*w;
	this.y=j*w;
	this.w=w;
	this.revealed = false;
	this.neighbourCount;
	// if (random(1) > 0.5)
	// {
	// 	this.bee = true;
	// }
	// else
	// {
	// 	this.bee = false ;
	// }

	this.bee=false;
}


Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x , this.y , this.w , this.w );

	if (this.revealed)
   {
   	if (this.bee)
   	{
        stroke(0);
        fill(127);
   		ellipse(this.x + w/2, this.y + w/2 , this.w*0.5 );
   	}
   	else
   	{
   
       fill(200);
      rect(this.x, this.y, this.w, this.w);
      if (this.neighbourCount > 0) {
        textAlign(CENTER);
        fill(0);
        text(this.neighbourCount, this.x + this.w * 0.5, this.y + this.w - 6);
      }

   	}
   }

}


Cell.prototype.contains = function(x,y) {
	return ( x > this.x && x < this.x + w && y > this.y && y< this.y + w);

}




//var scoreObj= document.getElementById("score");
Cell.prototype.reveal = function() {
	if(this.revealed)
	{
		return;
	}
this.revealed = true;


if(!this.bee)
{
var computerScore = document.getElementById('score');
    var number = computerScore.innerHTML;
    number++;
    score.innerHTML = number;
}
   



if (this.neighbourCount==0)
{
	//flood fill
	this.floodFill();

}
}

Cell.prototype.floodFill = function()
{ 
	for (xOff=-1; xOff<=1 ; xOff++)
{
	for (yOff=-1; yOff<=1 ; yOff++)
	{
		var i = this.i+xOff;
		var j = this.j+yOff;
		if(i>-1 && i<cols && j>-1 && j<rows)
		{
			var neighbour= grid[i][j];
			if (!neighbour.bee && !neighbour.revealed)
			{
				neighbour.revealed=true;


				var computerScore = document.getElementById('score');
                var number = computerScore.innerHTML;
                number++;
                score.innerHTML = number;

				//scoreObj.innerHTML=parseFloat(scoreObj.innerHTML)+1;  //scores added 
			}
}
}
}
}









Cell.prototype.countBombs=function()
{
	var total=0;
	if (this.bee)
	{
		this.neighbourCount=-1;
		return;
	}

for (xOff=-1; xOff<=1 ; xOff++)
{
	for (yOff=-1; yOff<=1 ; yOff++)
	{
		var i = this.i+xOff;
		var j = this.j+yOff;
		if(i>-1 && i<cols && j>-1 && j<rows)
		{
            var neighbour = grid[i][j];
            if (neighbour.bee)
                 {
      	             total++;
                  }
        }

	}
}
// console.log("check");
this.neighbourCount = total;
}














