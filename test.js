var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');
var gmail = google.gmail('v1');

var REDIRECT_URL = "";
var CLIENT_ID = "471527063715-lds28h4b374tuhqp3b7vqjbhv01i7a1d.apps.googleusercontent.com";
var CLIENT_SECRET= "K9-SrnxoN0M2TR8CWY6gAEBj";
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);


oauth2Client.setCredentials({
  access_token: 'ya29.ngDZr_gD94Xo8ynVXnL5e_zALLTRcuuXLwz4X1aoM_7IOPqdWOnX4O5i',
  refresh_token: ''
});
/*
plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, response) {
  console.log(response);
});
*/

gmail.users.messages.list({ userId: 'me', includeSpamTrash:'no', labelIds:'', maxResults:2, pageToken:'', q:'', fields: 'all'}), function(err, response) {
  	console.log(response);
	console.log(err);
}




