import express from 'express';

import FeaturesController from './controllers/FeaturesController.js';

const routes = express.Router();

routes.get('/features', FeaturesController.index);

export default routes;
