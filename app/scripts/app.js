/*global define */
define([], function () {
    'use strict';
    
    $(document).ready(function(){
    alert("Bienvenido");
    
    var highlight = function(button, color){
    	var oldColor = button.css("background-color")
    	button.css("background-color", color);
    	setTimeout(function(){
    		button.css("background-color", oldColor)
    	}, 200)
    }
 
    var userClicks = new Array()
    $(".button").click(function(){
  		var thisId = $(this).attr('id')
  			if(thisId === "blue"){
  				userClicks.push(thisId);
  				highlight($(this), "yellow")
  			}else if (thisId === 'red'){
  				userClicks.push(thisId);
  				highlight($(this), "#a00")
  			}else if (thisId=== "green"){
  				userClicks.push(thisId);
  				highlight($(this), "#a00")
  		  	}else if (thisId === "yellow"){
  		  		userClicks.push(thisId);
  		  		highlight($(this), "#a00")
  		  	}else{
  		  		console.log("No funciona")
  		  	}
  		console.log(userClicks);
    }) 
    
   /* $("#blue").hover(function(){
    	  $("#blue").css("background-color","#207ce5");
    	  },function(){
    	  $("#blue").css("background-color","blue");
    	});
    $("#red").hover(function(){
  	  $("#red").css("background-color","#e73827");
  	  },function(){
  	  $("#red").css("background-color","red");
  	});
    $("#green").hover(function(){
  	  $("#green").css("background-color","#91e842");
  	  },function(){
  	  $("#green").css("background-color","green");
  	});
    $("#yellow").hover(function(){
  	  $("#yellow").css("background-color","#f2fa05");
  	  },function(){
  	  $("#yellow").css("background-color","yellow");
  	  });	*/
  		
    return '\'Allo \'Allo!';
})
})
