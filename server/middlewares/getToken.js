const axios = require('axios');
const { OAUTH_URL, OAUTH_OPEN_SCOPE } = require('../../utility/api');

module.exports = function (req, res, next) {
    let accessToken, tokenType;
    console.log('cookies: '+ req.cookies.token);
    console.log(req.cookies.token === undefined);
    if (req.cookies.token === undefined) {
        console.log('No Cookie');
        axios.post(OAUTH_URL,OAUTH_OPEN_SCOPE)
        .then(response => {
          accessToken = response.data.access_token;
          tokenType = response.data.token_type;
          console.log('getFirstToken' + accessToken);
          res.cookie('token', `${accessToken}`);
          next();
        }).catch(err => console.log(err));
    } else {
        console.log('has cookie');
        next();
    }    
}