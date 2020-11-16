import 'dotenv/config';

import express from 'express';
const path = require('path');
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.resolve(__dirname, "..", "assets")));
app.use(routes);

app.listen(3333, () => {console.log("server started")});
