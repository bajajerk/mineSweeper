
function Cell(x,y,w)
{
	this.x=x;
	this.y=y;
	this.w=w;
	this.revealed = false;
	if (random(1) > 0.5)
	{
		this.bee = true;
	}
	else
	{
		this.bee = false ;
	}

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
   	fill(127);
   	noStroke();
   	rect(this.x , this.y , this.w , this.w );

   	}
   }

}


Cell.prototype.contains = function(x,y) {
	return ( x > this.x && x < this.x + w && y > this.y && y< this.y + w);

}

Cell.prototype.reveal = function() {
this.revealed = true;
}