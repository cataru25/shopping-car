const Joi = require("joi");

const validate = (schema) => async (req, res, next) => {
  const { error } = await schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(422).json({ errors });
  }
  next();
};

const addCarSchema = Joi.object({
  productId: Joi.string().required(),
  quantity: Joi.number().positive().required(),
});

const updateCarSchema = Joi.object({
  quantity: Joi.number().positive().required(),
});

exports.validateAddToCar = validate(addCarSchema);
exports.validateUpdateQuantity = validate(updateCarSchema);
