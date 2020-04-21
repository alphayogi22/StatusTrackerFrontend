import axios from 'axios';

export const login = user => {

  return axios.post('http://localhost:8000/rest-auth/login/',
           JSON.stringify(user),
           {
               headers: { 'Content-Type': 'application/json'}
           }
  )
            .then(response => {
                console.log('Inside the login api call function');
                console.log(response);
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('Auth-Key', JSON.stringify(response.data.key));
                return response;
            })
            .catch ( err => {
                console.log(err);
            }) 
}