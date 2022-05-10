import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './src/api/routers/Products.router.js';
import router1 from './src/api/routers/category.router.js';
import { Model } from 'objection';
import KnexConfig from './databases/knex.js';
import bodyParser from 'body-parser';

Model.knex(KnexConfig);
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.use('/api', router1);

app.listen(port, () => {
 console.log(`Example app listening on port http://localhost:${port}`)
})
