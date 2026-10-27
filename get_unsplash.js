const https = require('https');
https.get('https://unsplash.com/napi/search/photos?query=excavator+trench+pipe&per_page=1', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log(json.results[0].id);
    } catch(e) { console.log(data.slice(0, 200)); }
  });
});
