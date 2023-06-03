const Joi = require("joi");

const validate = (schema) => async (req, res, next) => {
  const { error } = await schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(422).json({ errors });
  }
  next();
};

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().positive().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().positive().optional(),
  quantity: Joi.number().positive().optional(),
}).min(1);

exports.validateCreateProduct = validate(createProductSchema);
exports.validateUpdateProduct = validate(updateProductSchema);
