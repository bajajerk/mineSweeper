//minesweeper


function make2DArray(cols,rows)
{
	var arr = new Array(cols);
	for (var i=0; i < arr.length; i++)
	{
		arr[i]= new Array(rows); 
	}
	return arr;

}


var grid;
var cols
var rows
var w = 40;
var totalBees=10;


function setup()
{
  var cnv = createCanvas(401, 401);
  var x = windowWidth/3;
  var y = windowHeight  / 6;
  cnv.position(x, y);

cols = floor(width / w);
rows = floor(height / w);
grid = make2DArray(cols,rows);
for ( var i=0; i < cols; i++)
{
	for(var j=0; j < rows; j++)
	{
		grid[i][j] = new Cell(i,j,w);
	}

}




//pick total bombs

var options=[];
for ( var i=0; i < cols; i++)
{
	for(var j=0; j < rows; j++)
	{
		options.push([i,j]);
	}
}






for ( var n =0;n<totalBees;n++)
{
	var index=floor(random(options.length));
	var choice =  options[index];
	var i= choice[0];
	var j = choice[1]; 
	options.splice(index,1);
	grid[i][j].bee=true;

}








for (  i=0; i < cols; i++)
{
	for( j=0; j < rows; j++)
	{
		grid[i][j].countBombs();
	}

}

//random opening 
i=1;
while(i<=6)
{
	var k=floor(Math.random() * cols);
	var l=floor(Math.random() * rows);
	if(!grid[k][l].bee && !grid[k][l].revealed)
	{
		grid[k][l].revealed=true;
		i=i+1;
	}
}
	


}











function draw()
{

background(255);
for ( var i=0; i < cols; i++)
{
	for(var j=0; j < rows; j++)
	{
		grid[i][j].show();
	}
}
}



function mousePressed()
{

for ( var i=0; i < cols; i++)
{
	for(var j=0; j < rows; j++)
	{
		if ( grid[i][j].contains(mouseX , mouseY) )
		{
           grid[i][j].reveal ();
           if(grid[i][j].bee)
           {
           	gameOver();

           }
		}
	}
}
}



function gameOver()
{
	for ( var i=0; i < cols; i++)
{
	for(var j=0; j < rows; j++)
	{
       grid[i][j].revealed=true;
   }

}
//alert("gameOver");
}




$("document").ready(function() {

$("#newGame").click(function(){
    setup();
    var computerScore = document.getElementById('score');
    
   computerScore.innerHTML = 0;
    })

})


