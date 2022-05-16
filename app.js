import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiProducts from './app/http/apis/products.api.js';
import apiCategory from './app/http/apis/category.api.js';
import { Model } from 'objection';
import KnexConfig from './databases/knex.js';
import bodyParser from 'body-parser';
import apiUser from './app/http/apis/user.api.js';

Model.knex(KnexConfig);
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiProducts);
app.use('/api', apiCategory);
app.use('/api', apiUser);

app.listen(port, () => {
 console.log(`Example app listening on port http://localhost:${port}`)
})
