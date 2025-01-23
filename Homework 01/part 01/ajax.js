//create a button When the button is clicked, get the data from the https://api.openaq.org/v1/cities api with an AJAX call. Print the details for the first 10 cities in an unordered list. If you are experiencing CORS problem, try using
//mode: "no-cors",
//headers: {
 //       "Access-Control-Allow-Origin": "*",
 //     }
//in the ajax call. If you are still having problem, use https://pokeapi.co/api/v2/pokemon and print details for the first ten pokemons of the result.
//Use JQuery AJAX call

$(document).ready(function(){
    $("#pokemonBtn").click(function(){
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon",
            success: function(response){
                for(let pokemon of response.results){
                    $("#pokemons").append(`<li>${pokemon.name}</li>`)
                }
            },
            error: function(response){
                console.log("The request failed");
                console.log(response);
            }
        })
    });
})