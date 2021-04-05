var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "second@email.com"
});



export const getUserByEmail = email => {
  const requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    redirect: 'follow'
  };

  return fetch(`http://localhost:8000/api/v1/user/${email}`, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
}