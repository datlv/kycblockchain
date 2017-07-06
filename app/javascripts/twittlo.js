var accountSid = 'AC840fce697fe3d58cebb786a778c8a744'; // Your Account SID from www.twilio.com/console
var authToken = 'c4c2bea283ba80cd8b9f6a087f7310bf';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+841635103271',  // Text this number
    from: '+841635103271' // From a valid Twilio number
}, function(err, message){
	console.log(message); 
});

