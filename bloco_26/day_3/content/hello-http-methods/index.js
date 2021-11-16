const axios = require("axios").default;

const TOKEN = "6v67i2068bkgfo004jx7jr5t";

const headers = { Athorization: TOKEN };

axios
  .post("https://postman-echo.com/post?param1=thisisnotatest")
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    if (err.status) return console.log("ERRORstatus:=" + err.response.status);
    console.log(err);
  });
