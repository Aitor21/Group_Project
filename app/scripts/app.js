/*global define */
define([], function () {
    'use strict';
    var highlight = function(button, color) {
        var oldColor = button.css("background-color")
        button.css("background-color", color).dequeue()
              .delay(300)
              .queue( function() {
                      button.css("background-color", oldColor).dequeue()
                    })
      }

      var showSequence = function(seq) {
         for(var id in seq) {
            (function(id){
              setTimeout( function() {
                highlight($("#"+seq[id]), "#fff")
              }, 600*id)
            })(id)
         }
      } 
         /*setTimeout( function() {
             userPlay = true;
           }, 600*seq.length)*/
           
         
        
      /*var userPlaying=false;*/
      var userClicks = new Array();
      var buttonList;
      var computerSequence = new Array();
      
      $(document).ready(function() {
    	  alert("Bienvenido");
    	  //conseguir que se inicialice el juego y que se ejecute una nueva secuencia despues de que el usuario clickase en el boton correcto
    	  /*initialize()
    		  generateComputerSequence()
    		  showComputerSequence()
    		  $('.button').click(function(){
    		  	if(userPlaying){
    		  	// codigo de user sequence
    		  	}
    		  })
    		  userSequence()
    		  if(!compareSequence()){
    			  break;
    		  }
    	   }*/
          buttonList = jQuery.map( $(".button"),
                         function(element) {
                           return $(element).attr('id')
                         })
          $(".button").click( function(){
               computerSequence.push( buttonList[
                                        Math.floor(Math.random()
                                          * buttonList.length)] )
               console.log(computerSequence)
               showSequence( computerSequence )
               /*
               var thisId = $(this).attr('id')
               if(thisId === buttonList[0]) {
                 userClicks.push(thisId);
                 highlight($(this), "2A47BC");
               } else if ( thisId === buttonList[1]) {
                 userClicks.push(thisId);
                 highlight($(this), "#42BC2A");
               } else if ( thisId === buttonList[2]) {
                 userClicks.push(thisId);
                 highlight($(this), "#D3CE2E");
               } else if ( thisId === buttonList[3]) {
                 userClicks.push(thisId);
                 highlight($(this), "D32E2E");
               } else {
                 console.log("Wrong button ID detected");
               }
               */
               //console.log(userClicks)
          })
      })

      return '\'Allo \'Allo!';
  });




/*    $(document).ready(function(){
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
      var random = new Array()
      
      $(document).ready(function() {
          buttonList = jQuery.map( $(".button"),
                         function(element) {
                           return $(element).attr('id')
                         })
          $(".button").click( function(){
               random.push( buttonList[
                                        Math.floor(Math.random()
                                          * buttonList.length)] )
               console.log(random)
               var thisId = $(this).attr('id')
               if(thisId === buttonList[0]) {
                 userClicks.push(thisId);
                 highlight($(this), "2A47BC");
               } else if ( thisId === buttonList[1]) {
                 userClicks.push(thisId);
                 highlight($(this), "42BC2A");
               } else if ( thisId === buttonList[2]) {
                 userClicks.push(thisId);
                 highlight($(this), "D3CE2E");
               } else if ( thisId === buttonList[3]) {
                 userClicks.push(thisId);
                 highlight($(this), "D32E2E");
               } else {
                 console.log("Wrong button ID detected")
               }
               console.log(userClicks);
          })
         for ( var i = 0; i <= random.length; i++ ){
        	 random[i];
        	 if(random[i] === buttonList[0]){
        		 highlight($(this), "2A47BC")
        	 } 
        	 else if(random[i] === buttonList[1]){
        		 highlight($(this), "42BC2A")
        	 }
        	 else if(random[i] === buttonList[2]){
        		 highlight($(this), "D3CE2E")
        	 }
        	 else if(random[i] === buttonList[3]){
        		 highlight($(this), "D32E2E")
        	 }
        	 else{
        		 console.log("NO!")
        	 }
         } 
      })
      
	return '\'Allo \'Allo!';
})
})
*/