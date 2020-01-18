// exercise

fetch('https://api-to-call.com/endpoint',{
  method: 'POST',
  body: JSON.stringify({id: '200'})
  }).then(response =>{
    if(response.ok){
      return response.json()
    }
  throw new Error('Request failed!')
    },networkError => console.log(networkError.message)
).then(jsonResponse=> {
  return jsonResponse
})

// exercise 2
// Update that boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API

const shortenUrl = () => {
  const urlToShorten = inputField.value. urlToShorten;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
}

// exercise 3

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}