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


export const attendance = data => {
    console.log(data);
    return axios.post('http://localhost:8000/api/status/',
    JSON.stringify(data),
    {
        headers: { 'Content-Type': 'application/json'}
    }
).then(response => {
    console.log('Inside the attendance api');
    return(response);
})
.catch(err => {
    console.log('attendance fail')
})
}