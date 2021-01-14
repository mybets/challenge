import database from '../database/index.js'

class FeaturesController {
  async index(req, res) {
    try {
      const features = database.database.database;
      
      return res.json(features);
    } catch (err) {
      console.error(err);
      return res.status(500).json({error: "Internal Server Error"});
    }
  }
}

export default new FeaturesController();