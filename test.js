var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');

var REDIRECT_URL = "";
var CLIENT_ID = "";
var CLIENT_SECRET= "";
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
var gmail = google.gmail({ version: 'v1', auth: oauth2Client });

gmail.users.messages.list({ userId: 'me', includeSpamTrash:'false', labelIds:'manintec', maxResults:2, pageToken:'', q:'', fields: 'all'}), function(err, response) {
  	//console.log(response);
	//console.log('ok');
}




