const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;
app.use(morgan('dev'))



// Add middleware for handling CORS requests from index.html
app.use(cors())

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);



// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {console.log(`CORS-enabled web server listening on port ${PORT}`)})
}
const path = require('path');

// Обслуживаем статические файлы из корня проекта
app.use(express.static(path.join(__dirname)));

// Главная страница, отдающая файл index.html из корня проекта
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
