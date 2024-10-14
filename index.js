//Data array
let messages = [
  {
    message: "This is the first y message",
    time: "Mon Oct 18 2022 15:36:27 GMT+0300 (Eastern European Summer Time)"
  },
  {
    message: "Hello hello!",
    time: "Mon Oct 18 2022 15:37:05 GMT+0300 (Eastern European Summer Time)"
  }
];

//STEP 1. Set up a server
let express = require('express');
let app = express();

//Serve a public folder
app.use(express.static('public'));

//Listen
let port = 3000;
app.listen(port, () => {
  console.log('Server listening on localhost:', port);
});

/*ROUTES */
//STEP 4-7. GET all the messages as an object

//STEP 10. POST for a new message
