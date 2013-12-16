/*global define */
define([], function () {
    'use strict';
    
    $(document).ready(function(){
    alert("Bienvenido");
    var highlight = function(button, color) {
        var oldColor = button.css("background-color")
        button.css("background-color", color)
        setTimeout(function() {
           button.css("background-color", oldColor)
        }, 200)
      }
      
      var userClicks = new Array()
      var buttonList
      var computerSequence = new Array()
      
      $(document).ready(function() {
          buttonList = jQuery.map( $(".button"),
                         function(element) {
                           return $(element).attr('id')
                         })
          $(".button").click( function(){
               computerSequence.push( buttonList[
                                        Math.floor(Math.random()
                                          * buttonList.length)] )
               console.log(computerSequence)
               var thisId = $(this).attr('id')
               if(thisId === buttonList[0]) {
                 userClicks.push(thisId)
                 highlight($(this), "2A47BC")
               } else if ( thisId === buttonList[1]) {
                 userClicks.push(thisId)
                 highlight($(this), "42BC2A")
               } else if ( thisId === buttonList[2]) {
                 userClicks.push(thisId)
                 highlight($(this), "D3CE2E")
               } else if ( thisId === buttonList[3]) {
                 userClicks.push(thisId)
                 highlight($(this), "D32E2E")
               } else {
                 console.log("Wrong button ID detected")
               }
               //console.log(userClicks)
          })
      })
   /* var buttonList;
    var computerSequence = new Array();
    
    buttonList = jQuery.map( $(".button"),
    		function(element){
    	return $(element).attr('id');
    })
    $(".button").click(function(){
    	computerSequence.push(buttonList[
    	                                 Math.floor(Math.random()
    	                                		 *buttonList.length)])
    }
    console.log(computerSequence)
    var thisId = $ (this)attr
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
  				highlight($(this), "red")
  			}else if (thisId === 'red'){
  				userClicks.push(thisId);
  				highlight($(this), "blue")
  			}else if (thisId=== "green"){
  				userClicks.push(thisId);
  				highlight($(this), "yellow")
  		  	}else if (thisId === "yellow"){
  		  		userClicks.push(thisId);
  		  		highlight($(this), "green")
  		  	}else{
  		  		console.log("No funciona")
  		  	}
  		console.log(userClicks);
    }) */
    
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



var buttonList;

buttonList = jQuery.map( $(".button"),
		function(element){
	return $(element).attr('id');
})