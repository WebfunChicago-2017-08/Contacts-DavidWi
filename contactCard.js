$(document).ready(function(){
    $(document).on("click", "button", function(){
        
        $("#contact").append("<div class= 'person'<h4>" + $("#first_name").val() + " " + $("#last_name").val() +"</h4>" + "<br />" + "<p>Click here for a description</p><p hidden>" + $("#Des").val() + "</p></div>")
    });
    $(document).on("click", ".person", function(){
        $(this).children('p').toggle("slow");
        
    })
})