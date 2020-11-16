import express from 'express';
import FeaturesController from './controllers/FeaturesController';

const routes = express.Router();

const featuresController = new FeaturesController();

routes.get('/features', featuresController.show);

export default routes;