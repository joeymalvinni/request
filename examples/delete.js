const request = require('../index.js')

// This example is a real-world (fake) account creation and deletion

// Before using this example, create a
// GoRest account at:
// https://gorest.co.in/consumer/login
// Then, copy the authentication token 
// and replace the <auth> next to 
// "Bearer " with your own auth token.

// Example: 

// headers: {
//     'Authorization': 'Bearer <auth token>'
// }

// Turns into:

// headers: {
//     'Authorization': 'Bearer c6926a61413c0271ae3398ef7d78dbc08aeff3bf8928ca33e226f764e21159e6'
// }


request.post('https://gorest.co.in/public-api/users', {
    data: JSON.stringify({
        name: 'Not Javascript',
        gender: 'Male',
        email: 'request@gmail.com',
        status: 'Inactive'
    }),
    headers: {
        'Authorization': 'Bearer <auth token>'
    }
}).json().then((response)=>{
    request.get('https://gorest.co.in/public-api/users/' + response.data.id).json().then(console.log) // checking if the user exists

    request.delete('https://gorest.co.in/public-api/users/' + response.data.id, {
        data: JSON.stringify({
            name: response.data.name,
            gender: response.data.gender,
            email: response.data.email,
            status: response.data.status
        }),
        headers: {
            'Authorization': 'Bearer <auth token>'
        }
    }).json().then(console.log) //=> {"code":204,"meta":null,"data":null}

    request.get('https://gorest.co.in/public-api/users/' + response.data.id).json().then((final_response)=>{
        if(final_response.data.message === "Resource not found"){
            console.log('Success! Account deleted.')
        } else {
            console.log('Account still exists...?')
        }
    }) //=> Success! Account deleted.
}) 