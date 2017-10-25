const API_KEY = '109b51d819793f113cce4306d11e663287c854799d38798fe7a820c03e0023d6';
const API_SECRET = '468836706186fef953e9316058ad115635f6e96382df1570ad5f636d4120ce6a';
exports.OAUTH_URL = 'https://api.producthunt.com/v1/oauth/token';
exports.OAUTH_USER_URL = 'https://api.producthunt.com/v1/oauth/';
exports.REDIRECT_URL = 'http://localhost:3001/authUser'
exports.USER_API_KEY = '109b51d819793f113cce4306d11e663287c854799d38798fe7a820c03e0023d6';
exports.OAUTH_OPEN_SCOPE = {
  client_id: API_KEY,
  client_secret: API_SECRET,
  grant_type: 'client_credentials'
};
exports.OAUTH_PRIVATE_SCOPE = {
  client_id: API_KEY,
  client_secret: API_SECRET,
  grant_type: 'authorization_code',
  redirect_uri: 'http://localhost:3001/authUser'
};