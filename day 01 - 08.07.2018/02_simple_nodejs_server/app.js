//store into 'express' local var, access to the express package.
let express=require('express');

//create a new web-api-handler with the built-in 'express()' function.
let app=express();

//route the default returned value to the 'view' directory.
//(will return index.html)
app.use(express.static("view"));

//congig the web-api to listen to the http request in port 3500.
app.listen(3500);