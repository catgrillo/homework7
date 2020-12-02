function gettingJSON(){
    //Display the forecast
    // Your code here.


    //Set default location if one isn't provided
    let location = "Ann Arbor";

    // Your code here.

    if(document.getElementById("location").value != ""){
        location = document.getElementById("location").value;
    }

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat = "imperial";

    // Your code here.
    if (document.getElementById("celcius").checked){
        fomat = document.getElementById("celcius").value;
    }
    else if (document.getElementById("fahrenheit").checked){
        fomat = document.getElementById("fahrenheit").value;
    }

    console.log("Format is " + fomat);

    //set the query  
    let query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=' + fomat + '&appid=9cd366f654cd2730f25e9c646f9e9b75';
    // Your code here. 
   
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    
    document.querySelector("#forecast").style.display = "block";

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

        console.log(JSON.stringify(json));
        // document.querySelector("#forecast").style.display = "block";

        loc = json["name"];
        temp = json["main"]["temp"];
        tempImg = json["weather"][0]["icon"];
        conditions = json["weather"][0]["description"]
        console.log("location: " + loc);
        console.log("temp: " + temp);
        console.log("Image: " + tempImg);
        console.log("Conditions: " + conditions);

        document.querySelector("#loc").innerHTML = loc;
        document.querySelector("#temp").innerHTML = temp + " with " + conditions;
        document.querySelector("#tempImg").src = 'http://openweathermap.org/img/wn/' + tempImg + '.png';

    });
}
