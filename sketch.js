

$(document).ready(function() {

	var sps = 5;
	var dimGrid = 300;
	var dimSquares = dimGrid/sps;



	$("body").append("<button type='button' id='clearButton'>Clear Screen</button>");
	$("body").append("<div id='completeGrid'></div>");

	resize(sps, dimGrid);



	

	$("#clearButton").click(function() {
		
		sps = prompt("Please Enter New Squares Per Side");
		$(".rows").remove();
		$(".squares").remove();
		
		resize(sps, dimGrid);
	});

	function resize(sqPerSide,sideLength) {

		for(var i = 0; i<sps; i++) {
			$("#completeGrid").append("<div class='rows'></div>");
		}

		for(i=0;i<sps; i++) {
			$(".rows").append("<div class='squares'></div>")
		}

		$("#completeGrid").width(sideLength);
		$(".rows").width(sideLength).height(sideLength/sqPerSide);
		$(".squares").width(sideLength/sqPerSide).height(sideLength/sqPerSide).css("background-color","rgb(255,255,255)");
		$(".squares").hover(function(){
			var colors = $(this).css('background-color');
			
			colors = colors.match(/\d+/);
			
			var newShade = colors[0]-25;
			if(newShade<0){
				newShade = 255;
			}
			$(this).css("background-color","rgb("+newShade+","+newShade+","+newShade+")");
		});
	};

//Math.random()
});

