// exercise 1

fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!')
  
  }, networkError =>{
    console.log(networkError.message)
}).then(jsonResponse => {
    return jsonResponse;
})

//exercise 2

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// exercise 3 

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse =>{
    renderResponse(jsonResponse)
  } )
}