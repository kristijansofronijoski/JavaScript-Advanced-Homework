// Use the Dog API https://dog.ceo/dog-api/documentation/breed
//Call the following url: https://dog.ceo/api/breed/hound/images
//Display (show on UI) each image returned in the response.
//Use Fetch or JQuery AJAX by your choice

let button = document.getElementById("btn");
let container = document.getElementById("dogContainer");
let image = document.getElementById("image");

button.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then(function (response) {
      console.log(response);
      response
        .json()
        .then(function (data) {
          console.log(data.message);
          let img = "";
          for (let msg of data.message) {
            img +=`<img width="300" src="${msg}"></img>`;
          }
          container.innerHTML = img;
        })
        .catch(function (errorParse) {
          console.log(errorParse);
        });
    })

    .catch(function (error) {
      console.log(error);
    });
});
