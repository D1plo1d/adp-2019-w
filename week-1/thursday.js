var rp = require("request-promise");
async function getUrl(url) {
  try {
    const response = await rp(url);
    console.log('got a response!');
    if (response == null) {
      throw new Error('fails')
    }
  } catch (e) {
    console.log("uh oh!");
  }
}
getUrl("http://www.google.ca/sadfljifaweofdiojawefeawefw");
