const routes = (app) => {
  const API_ROUTE = '/api';

  app.use('/', require('./main.routes'));
  // API
  app.use(`${API_ROUTE}/users`, require('./user.routes'));
  app.use(`${API_ROUTE}/admins`, require('./admin.routes'));
  app.use(`${API_ROUTE}/auth`, require('./auth.routes'));
};

module.exports = routes;
