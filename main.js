/*
Prototype to make basic API requests to Uber and Lyft.
If this is useful, then further make API requests using my own activities that I am packaging.
Instead of delivering data constantly, integrate it as an API request with a /start/, a /stop/, and a /pause/
And the user can then request to start a process.

An API request system might really be useful, much better than delivering Excel data, but the focus is on automating company processes, so make an API request to call those, and charge for each API request.
*/

const request = require('request');

//const UBER_AUTH_ENDPOINT = 'https://login.uber.com/oauth/v2/authorize';
const UBER_AUTH_ENDPOINT ='https://login.uber.com/oauth/v1.2/authorize?client_id=Y31cWiSmUyCeFgwLp3I5_IG1Bi7Bn5Ht&response_type=code&rediret_uri=http://localhost'

const UBER_TOKEN_ENDPOINT = 'https://login.uber.com/oauth/v2/token';
const UBER_URL = 'https://api.uber.com/v1.2/products'//?latitude=37.7759792&longitude=-122.41823' //https://api.uber.com/
//csrfToken: "1562715263-01-BB9wLpfYp7-IAs4jmC562vyIV0jow7tfakdaf7z9jsQ"
//const UBER_AUTH_CODE = 'JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAAGlEMhQXu4c8Wqi2Gbcp8ydsAAAAoftjk0Q4xYYMVizz4zkJiWRSUnFkHG5_WbqS2wJqbf2KyddmzUYe135feoQSLFI5zaRdxbhpaamLIRjIG_K0BHXwKr4FK6tunEj3AvdHawwHTYi185Oc5Yvgl3kF83lrU22zL9OD2pco3LeDDAAAAIy70jZqbKjbo4kF7yQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU';
//const UBER_AUTH_CODE = 'Y31cWiSmUyCeFgwLp3I5_IG1Bi7Bn5Ht'
const UBER_AUTH_CODE = 'BJFan_2lk3k4_Q3KeH_Y4lLk3d2nASeoDoCw4XmE';
//const OLACAB_URL = 
//actions
//const ZOOMY_ACTION = 

request.post(UBER_AUTH_ENDPOINT, {'Content-Type' : 'application/json'},function(err, response, body){
	console.log('error:', err); // Print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	//console.log('body:', body); // Print the HTML for the Google homepage.
	console.log('text: ', response);
});
/*
request.get(
	UBER_URL,
	//uri: UBER_URL,
	{ 
		"Authorization": "Token " + UBER_AUTH_CODE,
		'content-Type' : 'application/json'
	},
	//method: 'GET',
	function (error, response, body) {
	  //console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	//}
});
*/