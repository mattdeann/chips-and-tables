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
    body: {
      "email": JSON.stringify(email)
    },
    redirect: 'follow'
  };

  return fetch("http://localhost:8000/api/v1/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}