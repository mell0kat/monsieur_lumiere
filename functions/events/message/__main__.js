const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const request = require('request')

/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  // Only send a response to certain messages
  if (text.match(/banana/i)) {

      request.get({
		    uri: 'http://10.200.173.4:5000/setrgb/255,255,0,3'
		  }, (err, result) => {

		    if (err) {
		      return callback(err);
		    }

		    let body;
		    try {
		      body = JSON.parse(result.body);
		    } catch (e) {
		      body = {}
		    }

		    if (!body.ok) {
		      return callback(new Error(body.error ? `Light Control Error: ${body.error}` : 'Invalid Request to Light Server'));
		    }

		    callback(null, data);

		  });

    callback(null, {
      text: `Hey <@${user}>! Did you say something about a banana?  Let's set the light to yellow because a banana is yellow`
    });



  } else if(text.match(/apple/i)){
  	 callback(null, {
      text: `Hey there! <@${user}> said apple`
    });

  } else if(text.match(/tomato/i)){
  	 callback(null, {
      text: `Hey <@${user}>!  Did you say something about tomato?`
    });

  } else if(text.match(/green|envy|jealous/i)){
  	   request.get({
		    uri: 'http://10.200.173.4:5000/setrgb/0,255,0,3'
		  }, (err, result) => {

		    if (err) {
		      return callback(err);
		    }

		    let body;
		    try {
		      body = JSON.parse(result.body);
		    } catch (e) {
		      body = {}
		    }

		    if (!body.ok) {
		      return callback(new Error(body.error ? `Light Control Error: ${body.error}` : 'Invalid Request to Light Server'));
		    }

		    callback(null, data);

		  });

  	 callback(null, {
      text: `Hey <@${user}>!  Did you say you were feeling green?`
    });

  } else if(text.match(/blueberry/i)){
  	 callback(null, {
      text: `Hey there! <@${user}> said blueberry`
    });

  } else if(text.match(/raisin/i)){
  	 callback(null, {
      text: `Hey there! <@${user}> said raisin`
    });

  }else {
    callback(null, {});
  }

};

