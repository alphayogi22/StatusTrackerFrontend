import axios from 'axios';

export const login = user => {

  return axios.post('http://localhost:8000/rest-auth/login/',
           JSON.stringify(user),
           {
               headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
           }
  )
            .then(response => {
                console.log('Inside the login api call function');
                localStorage.setItem('usertoken', 'response.data.token')
                return response.data.token
            })
            .catch ( err => {
                console.log(err);
            }) 
}