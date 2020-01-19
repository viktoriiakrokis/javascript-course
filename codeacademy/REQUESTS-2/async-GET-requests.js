// exercise it is written in JS ES8

const getData = async () =>{
  try {
   const response = await fetch('https://api-to-call.com/endpoint' )
   if(response.ok) {
     const jsonResponse = await response.json();
     return jsonResponse;
   }
    throw new Error('Request failed!');
  } catch(error){
    console.log(error)
  }
}

// exercise 2
// AJAX function
// Code goes here
const getSuggestions = async () =>{
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'})
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse)
    }
    
  } catch(error){
    console.log(error)
  }
}