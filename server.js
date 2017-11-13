import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import config from './config';
import authRoute from './routes/auth';

const app = express();

app.listen(config.port, err => {
   if (err) throw err;

   console.log(`Server is listening on port ${config.port}`);
});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', authRoute);