//Create a button
//When the button is clicked, call the https://jsonplaceholder.typicode.com/users/1
//Get the details for the first user using FETCH API.
//Print the person stats in a table.

let button = document.getElementById("myBtn");
button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      console.log(response);
      response
        .json()
        .then(function (data) {
          console.log(data);
          const table = `
                        <table>
                            <tr>
                                <th>Field</th>
                                <th>Data</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>${data.name}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>${data.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>${data.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>${data.phone}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>${data.website}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>${data.company.name}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>${data.address.suite}, ${data.address.street}, ${data.address.city}, ${data.address.zipcode}</td>
                            </tr>
                        </table>
                    `;
          document.getElementById("userData").innerHTML = table;
        })
        .catch(function (errorParse) {
          console.log(errorParse);
        });
    })

    .catch(function (error) {
      console.log(error);
    });
});
