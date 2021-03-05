import { Router } from "express";
import { FeaturesController } from "./controllers/FeaturesController";

const router = Router();

const featuresController = new FeaturesController();

router.get("/features", featuresController.getAll);

export { router };
