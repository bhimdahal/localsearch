



function downloadImage(){

    var input1 = $("#food").val().replace(/ /g,"_");
    var input2 = $("#zip").val().replace(/ /g,"_");
    
var jsonURL="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D%27"+input2+"%27%20and%20query%3D%27"+input1+"%27&format=json&callback=";


	$.get(jsonURL, function(data) {

      
	    var dataArray = (data.query.results.Result);
        console.log(dataArray);
        var link = dataArray.Phone;
        console.log(link);
        

    $("#main").html("");
        $.each(dataArray, function(i, item) {
            $("#main").append(
    $('<li>').append(
        $('<h2>').text(item.Title).append ($('<p>').text(item.Address +" "+ item.City +" "+ item.State )).append($('<p>').text(item.Phone)).append($('<hr>'))

        
));         
  
});
        $('li').click(function(){
            var link = dataArray.Url;
            console.log(link);
            window.open('link', '_blank');
        });
             
});    

}





