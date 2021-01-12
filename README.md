#### ***Note:** At this time, the module is not named, therefore, the name `request` is used to represent this module.
# **Request**
### Super Simplified HTTP client for Node.js.


[![Build Status](https://travis-ci.com/joeymalvinni/request.svg?branch=main)](https://travis-ci.com/joeymalvinni/request)
[![Known Vulnerabilities](https://snyk.io/test/github/joeymalvinni/request/badge.svg?targetFile=package.json)](https://snyk.io/test/github/joeymalvinni/request?targetFile=package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/joeymalvinni/request/pulls)
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  


# Table of Contents

- [Usage](#usage)
- [Docs](#docs)
    - [Get](#get-requestgeturl-headers)
    - [Post](#post-requestposturl-headers)
    - [Head](#head-requestheadurl-headers)
    - [Put](#put-requestputurl-headers)
    - [Proxy](#proxy-requestproxyproxyUrl)

&nbsp;  
&nbsp;  
---
&nbsp;  

## **Usage** 
```js
// require the request module
const request = require('request')

// supports promise chaining
// use the built-in .json() function to return a JSON object
request.get('http://ip.jsontest.com/?callback=showMyIP').json().then(console.log)
//=> showMyIP({"ip": "127.0.0.1"});

// or use an asynchronous function to handle requests
async function get(){
    let response = await request.get('http://ip.jsontest.com/?callback=showMyIP').json()
    console.log(get())
    //=> showMyIP({"ip": "127.0.0.1"});
}
get()
```

---

&nbsp;  
# **Docs**

## Functions
&nbsp;  
## **get** &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;`request.get(url, headers)`

Returns an object of functions that apply proccesing to the response. To get the raw response buffer, use `.buffer()`.  

&ensp;&ensp;&ensp;&ensp;`.text()`  
&ensp;&ensp;&ensp;&ensp;Returns the get response result as a string.    
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.get('https://postman-echo.com/get').text().then(console.log)
```
  
&ensp;&ensp;&ensp;&ensp;`.json()`  
&ensp;&ensp;&ensp;&ensp;Returns the response result as a JSON object.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.get('https://postman-echo.com/get').json().then(console.log)
```  
  
&ensp;&ensp;&ensp;&ensp;`.buffer()`  
&ensp;&ensp;&ensp;&ensp;Returns the get response result as a buffer.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**
```js 
request.get('https://postman-echo.com/get').buffer().then(console.log)
```  

&ensp;&ensp;&ensp;&ensp;`.error()`  
&ensp;&ensp;&ensp;&ensp;Useful to check if a request returns an error without stopping the Node proccess, returns `undefined` otherwise.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
console.log(request.get('https://postman-echo.com/get').error())
//=> undefined
```  

&nbsp;  
## **post**&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;`request.post(url, headers)`

Returns an object of functions that apply proccesing to the response. To get the raw response buffer, use `.buffer()`.  

&ensp;&ensp;&ensp;&ensp;`.text()`  
&ensp;&ensp;&ensp;&ensp;Returns the post response result as a string.    
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
 request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).text().then(console.log)
``` 
  
&ensp;&ensp;&ensp;&ensp;`.json()`  
&ensp;&ensp;&ensp;&ensp;Returns the response result as a JSON object.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
 request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).json().then(console.log)
``` 
  
&ensp;&ensp;&ensp;&ensp;`.buffer()`  
&ensp;&ensp;&ensp;&ensp;Returns the get response result as a buffer.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**
```js 
request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).buffer().then(console.log)
``` 

&ensp;&ensp;&ensp;&ensp;`.error()`  
&ensp;&ensp;&ensp;&ensp;Useful to check if a request returns an error without stopping the Node proccess, returns `undefined` otherwise.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
console.log(request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).error())
//=> undefined
```  

&nbsp;  
## **head** &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;`request.head(url, headers)`

Returns the requested resource's response headers.  

&ensp;&ensp;&ensp;&ensp;`.text()`  
&ensp;&ensp;&ensp;&ensp;Returns the get response result as a string.    
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.head('https://www.npmjs.com/').headers().then((res)=>{
    console.log("NPM's status code: " + res.statusCode)
})
```
&nbsp;  
## **put**&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;`request.put(url, headers)`

Returns an object of functions that apply proccesing to the response. To get the raw response buffer, use `.buffer()`.  

&ensp;&ensp;&ensp;&ensp;`.text()`  
&ensp;&ensp;&ensp;&ensp;Returns the put response result as a string.    
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.put('https://postman-echo.com/put', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).text().then(console.log)
``` 
  
&ensp;&ensp;&ensp;&ensp;`.json()`  
&ensp;&ensp;&ensp;&ensp;Returns the response result as a JSON object.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.put('https://postman-echo.com/put', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).json().then((res)=>{
    console.log(res.data)
})
``` 
  
&ensp;&ensp;&ensp;&ensp;`.buffer()`  
&ensp;&ensp;&ensp;&ensp;Returns the get response result as a buffer.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**
```js 
request.put('https://postman-echo.com/put', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).buffer().then(console.log)
``` 

&ensp;&ensp;&ensp;&ensp;`.error()`  
&ensp;&ensp;&ensp;&ensp;Useful to check if a request returns an error without stopping the Node proccess, returns `undefined` otherwise.  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js 
request.put('https://postman-echo.com/put', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).error().then(console.log)
//=> undefined
```  

&nbsp;  
## **proxy**&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;`request.proxy(proxyUrl)`

Proxies a request. Format the string like `protocol://proxyIp:proxyPort` (e.g. `http://127.0.0.1:3000`). Returns the type of request you want to make. Then, request the resource like normal.  

### ***Please note:***
As of now, this proxy only works with HTTP proxy servers.

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;**Example:**  
```js
request.proxy('http://127.0.0.1:80').get('https://wtfismyip.com/json').text().then(console.log)
```

---
