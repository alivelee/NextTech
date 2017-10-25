const axios = require('axios');
const { OAUTH_PRIVATE_SCOPE,OAUTH_URL } = require('../../utility/api');
module.exports = function (req, res, next){
	let accessToken, tokenType;
	let authCode = {
		code: `${req.query.code}` 
	}
	console.log('code' + req.query.code);
	const authParam = Object.assign(OAUTH_PRIVATE_SCOPE,authCode);
	axios.post(OAUTH_URL,authParam)
		.then(response => {
			accessToken = response.data.access_token;
		  tokenType = response.data.token_type;
		  console.log('getUserToken' + accessToken);
			res.cookie('token', `${accessToken}`);
			console.log('cookie setted');
		  next();
		}).catch(err => console.log(err));
}