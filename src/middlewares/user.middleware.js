const Joi = require("joi");

const validate = (schema) => async (req, res, next) => {
  const { error } = await schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(422).json({ errors });
  }
  next();
};

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.number().positive().required(),
});

exports.validateCreateUser = validate(createUserSchema);
