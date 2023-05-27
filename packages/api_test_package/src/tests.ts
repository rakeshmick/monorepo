import Request from './ApiRequest';

async function performRequest() {
  const apiRequest = new Request('https://reqres.in');

  try {
    // GET request example
    const responseData = await apiRequest.get<{ message: string }>('/api/users/2');
    console.log("GET "+JSON.stringify(responseData));

    // POST request example
    const postData = { name: 'John Doe', job: 'john@example.com' };
    const response = await apiRequest.post('/api/users', postData);
    console.log("POST "+JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
}

performRequest();
