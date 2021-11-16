const axios = require("axios").default;

axios
  .get("https://postman-echo.com/get?param1=thisisnotatest")
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
