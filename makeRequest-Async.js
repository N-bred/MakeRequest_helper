const makeRequest = async (url, method = 'GET') => {
  try {
    if (method === 'POST') {
      const request = await fetch(url, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },

        body: JSON.stringify({ a: 1, b: 'Textual content' })
      });
      const data = await request.json();

      // Manipulate the data
      console.log(data);
    } else if (method === 'GET') {
      const request = await fetch(url);
      const data = await request.json();

      // Manipulate the data
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};
/*  You can manipulate the data in a nicer way like this 

const request = makeRequest('');

request.then(data => {
  console.log(data);
});

*/
