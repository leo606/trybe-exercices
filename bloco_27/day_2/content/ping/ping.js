const axios = require('axios');

axios
  .get("http://localhost:3000/ping/")
  .then((resp) => {
    console.log(resp.data);
    console.log(resp.status);
  })
  .catch((err) => {
    console.log(err);
  });
