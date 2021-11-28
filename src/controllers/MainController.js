const { EndpointModel } = require('../models');

class MainController {
  static async getAll(req, res) {
    try {
      const endpoints = await EndpointModel.getAll();
      const token = req.cookies.token || 'you not have an token, please login';
      res.render('index', { endpoints, token });
    } catch (error) {
      res.status(404).json({ message: 'Endpoint not found' });
    }
  }
}

module.exports = MainController;
