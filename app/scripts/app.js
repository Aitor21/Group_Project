/*global define */
define([], function () {
    'use strict';
    
    $(document).ready(function(){
    alert("Bienvenido");
    })
    $("#blue").hover(function(){
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
  	});

    return '\'Allo \'Allo!';
});


