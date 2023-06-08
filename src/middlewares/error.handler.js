exports.errorHandler = (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(`error { error: ${err?.message} }`);
};

exports.notFoundHandler = (req, res, _) => {
  res.status(404).send(`Page ${req.path} does not exist in this server`);
};
