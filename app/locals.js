module.exports = config => (req, res, next) => {
  res.locals.APP_NAME = config.appName;

  next();
};
