$(document).ready(function(){

//jumbotron click event
    $("#scroll-down").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#article-scroll").offset().top - 50}, 1250)
    });
    
//navbar click event
    $("#art-link").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#art").offset().top - 50}, 1250)
    });
    $("#dine-link").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#dine").offset().top - 50}, 1250)
    });
    $("#city-link").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#city").offset().top - 50}, 1250)
    });
    $("#history-link").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#history").offset().top - 50}, 1250)
    });
    $("#lit-link").on('click',function(event){
       $('html, body').animate({
           scrollTop: $("#lit").offset().top - 50}, 1250)
    });

});

