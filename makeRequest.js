//  Author: Nicolas Caballero //

const makeRequest = (url, method = "GET") => {
   // Put a conditional to check if it is a GET or POST request.

   if (method === "POST") {
      // If its a POST request, it will make sure to pass the properties needed.
      const request = fetch(url, {
         method: method,
         headers: {
            Accept: "application/json",
            "Content-type": "application/json"
         },
         // Make sure to modify this part, it is what you're going to send.
         body: JSON.stringify({ a: 1, b: "Textual content" })
      });

      request
         // The promise is taken and converted into JSON.
         .then(response => response.json())
         // The function below is set up for you to manipulate the data as you need.
         .then(data => {
            console.log(data);
         })
         // This will catch any error.
         .catch(error => console.log("Oh no, something is wrong ", error));
   } else if (method === "GET") {
      const request = fetch(url);
      request
         // The promise is taken and converted into JSON.
         .then(response => response.json())
         // The function below is set up for you to manipulate the data as you need.
         .then(data => {
            console.log(data);
         })
         // This will catch any error.
         .catch(error => console.log("Oh no, something is wrong ", error));
   }
};
