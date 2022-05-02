import express from 'express';

import dotenv from 'dotenv';
import router from './app/router.js';
import { Model } from 'objection';
import KnexConfig from './databases/knex.js';

Model.knex(KnexConfig);
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;


app.use('/api', router);

app.listen(port, () => {
 console.log(`Example app listening on port http://localhost:${port}`)
})
