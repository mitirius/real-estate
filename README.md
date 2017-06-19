# Real-Estate

Its a sample Real Estate Property website, allowing customers to view properties up in the market and a short details of them.

It was developed using [React.js](https://facebook.github.io/react/), [Bootstrap](http://getbootstrap.com/)

It supports the following features : -

1. You can see property on sale. 
2. A short detail is provided in the title for each property.
3. You can see the price, area and no. of rooms for each property.

Please ensure you have a local [nodejs](https://nodejs.org/en/) installation in you computer and then run `npm install` and then `npm start` to start the web app locally.

Please note due to ***missing CORS configuration*** on the server (https://api.mcmakler.de/v1/advertisements) I was unable to access the web api from my React frontend, hence I downloaded the json request and completed the task. 

Please consult the following links for more information : -

 - https://stackoverflow.com/questions/36419414/isomorphic-fetch-response-json-method-always-throw-unexpected-end-of-input-e
 
 - https://stackoverflow.com/questions/41213080/syntaxerror-unexpected-end-of-input-after-json-in-fetch